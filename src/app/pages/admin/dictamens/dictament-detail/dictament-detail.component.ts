import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbToastrService, NbWindowRef, NbWindowService, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { DictamenService } from '../../../../@core/backend/common/services/dictamen.service';
import { Dictamen } from '../../../../@core/interfaces/auction/dictamen.model';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-dictament-detail',
  templateUrl: './dictament-detail.component.html',
  styleUrls: ['./dictament-detail.component.scss']
})
export class DictamentDetailComponent extends BasePage {
  public formDictament: FormGroup;
  private data: Dictamen;
  public actionBtn: string = "Guardar";
  constructor(
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: DictamenService,
    public windowRef: NbWindowRef,
    public toastrService: NbToastrService,
    @Inject(NB_WINDOW_CONTEXT) context) {
    super(toastrService);
    if (null != context.data) {
      this.data = context.data;
    }
  }

  ngOnInit(): void {
    this.prepareForm();
  }
  private prepareForm() {
    this.formDictament = this.fb.group({
      id: [null],
      description: [null, Validators.compose([Validators.pattern(""), Validators.required])],
      noRegistration: [null, Validators.compose([Validators.pattern("[0-9]"), Validators.required])],
      dict_ofi: [null, Validators.compose([Validators.pattern("[a-zA-Z]((\.|_|-)?[a-zA-ZáéíóúÁÉÍÓÚ\u0020]+){0,255}"), Validators.required])],
      areaProcess: [null, Validators.compose([Validators.pattern("[a-zA-Z]((\.|_|-)?[a-zA-ZáéíóúÁÉÍÓÚ\u0020]+){0,255}"), Validators.required])],
    });
    if (this.data) {
      this.actionBtn = "Actualizar";
      this.formDictament.patchValue(this.data)

    }
  }

  public get description() { return this.formDictament.get('description'); }
  public get noRegistration() { return this.formDictament.get('noRegistration'); }
  public get dict_ofi() { return this.formDictament.get('dict_ofi'); }
  public get areaProcess() { return this.formDictament.get('areaProcess'); }

  public register(): void {
    const data = this.formDictament.getRawValue();
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
    this.service.update(this.data.id, data).subscribe(
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
