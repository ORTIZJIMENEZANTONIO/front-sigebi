import { ChangeDetectorRef, Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService, NbToastrService } from '@nebular/theme';
import { DomSanitizer } from '@angular/platform-browser';
import { BaseApp } from '../../../../@core/shared/base-app';
import { ParagraphsService } from '../../../../@core/backend/common/services/paragraphs.service';
import { ParagraphsModel } from '../../../../@core/interfaces/auction/paragraphs.model';
import { BasePage } from '../../../../@core/shared/base-page';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';


@Component({
  selector: 'ngx-paragraphs-detail',
  templateUrl: './paragraphs-detail.component.html',
  styleUrls: ['./paragraphs-detail.component.scss']
})
export class ParagraphsDetailComponent extends BasePage {
  public formParagraph: FormGroup;
  private paragraph: ParagraphsModel;
  public actionBtn: string = "Guardar";
  constructor(
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: ParagraphsService,
    public windowRef: NbWindowRef,
    public toastrService: NbToastrService,
    @Inject(NB_WINDOW_CONTEXT) context) {
    super(toastrService);
    if (null != context.paragraph) {
      this.paragraph = context.paragraph;
    }
  }
  ngOnInit(): void {
    this.prepareForm();
  }
  private prepareForm() {
    this.formParagraph = this.fb.group({
      paragraph: [null, Validators.compose([Validators.pattern(""), Validators.required])],
      version: [null, Validators.compose([Validators.pattern(""), Validators.required])],
      reportName: [null, Validators.compose([Validators.pattern("[a-zA-Z]((\.|_|-)?[a-zA-ZáéíóúÁÉÍÓÚ\u0020]+){0,255}"), Validators.required])],

    });
    if (this.paragraph) {
      this.actionBtn = "Actualizar";
      this.formParagraph.patchValue(this.paragraph)

    }
  }

  public get paragraphF() { return this.formParagraph.get('paragraph'); }
  public get version() { return this.formParagraph.get('version'); }
  public get reportName() { return this.formParagraph.get('reportName'); }

  public register(): void {
    const data = this.formParagraph.getRawValue();
    this.actionBtn == "Guardar" ? this.createRegister(data) : this.updateRegister(data);
  }
  private createRegister(data): void {
    this.service.register(data).subscribe(
      () => {
        this.onLoadFailed('success', 'Despacho', 'Registrado Correctamente');
      }, err => {
        let error = '';
        if (err.status === 0) {
          error = SweetAlertConstants.noConexion;
        } else {
          error = err.message;
        }
        this.onLoadFailed('danger', 'Error', error);
      }, () => {
        this.windowRef.close();
      });
  }
  private updateRegister(data): void {
    this.service.update(this.paragraph.id, data).subscribe(
      () => {
        this.onLoadFailed('success', 'Despacho', 'Actualizado Correctamente');
      }, err => {
        let error = '';
        if (err.status === 0) {
          error = SweetAlertConstants.noConexion;
        } else {
          error = err.message;
        }
        this.onLoadFailed('danger', 'Error', error);
      }, () => {
        this.windowRef.close();
      });
  }
}
