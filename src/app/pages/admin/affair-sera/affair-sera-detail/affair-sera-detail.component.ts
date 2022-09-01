import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService, NbWindowRef, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { AffairSeraService } from '../../../../@core/backend/common/services/affair-sera.service';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-affair-sera-detail',
  templateUrl: './affair-sera-detail.component.html',
  styleUrls: ['./affair-sera-detail.component.scss']
})
export class AffairSeraDetailComponent extends BasePage implements OnInit {

  public form: FormGroup;
  private data: any = {};
  public actionBtn: string = "Guardar";

  constructor(
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: AffairSeraService,
    public windowRef: NbWindowRef,
    public toastrService: NbToastrService,
    @Inject(NB_WINDOW_CONTEXT) context
  ) {
    super(toastrService);
    if (null != context.data) {
      this.data = context.data;
    }
  }
  ngOnInit(): void {
    this.prepareForm();
  }
  private prepareForm(): void {
    this.form = this.fb.group({
      id: [null],
      description: [null, Validators.compose([Validators.pattern(""), Validators.required])],
      relationPropertyKey: [null, Validators.compose([Validators.pattern(""), Validators.required])],
      referralNoteType: [null, Validators.compose([Validators.pattern(""), Validators.required])],
      versionUser: [null, Validators.compose([Validators.pattern(""), Validators.required])],
      creationUser: [null, Validators.compose([Validators.pattern(""), Validators.required])],
      creationDate: [null, Validators.compose([Validators.pattern(""), Validators.required])],
      editionUser: [null, Validators.compose([Validators.pattern(""), Validators.required])],
      modificationDate: [null, Validators.compose([Validators.pattern(""), Validators.required])],
      idRegister: [null, Validators.compose([Validators.pattern(""), Validators.required])],
    });
    if (this.data.id != null) {
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.data);
    }
  }

  public get description() { return this.form.get('description'); }
  public get relationPropertyKey() { return this.form.get('relationPropertyKey'); }
  public get referralNoteType() { return this.form.get('referralNoteType'); }
  public get versionUser() { return this.form.get('versionUser'); }
  public get creationUser() { return this.form.get('creationUser'); }
  public get creationDate() { return this.form.get('creationDate'); }
  public get editionUser() { return this.form.get('editionUser'); }
  public get modificationDate() { return this.form.get('modificationDate'); }
  public get idRegister() { return this.form.get('idRegister'); }

  public register(): void {
    const data = this.form.getRawValue();
    this.actionBtn == "Guardar" ? this.createRegister(data) : this.updateRegister(data);
  }
  private createRegister(data): void {
    this.service.register(data).subscribe(
      data => {
        this.onLoadFailed('success', 'Asuntos', 'Registrado Correctamente');
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
      data => {
        this.onLoadFailed('success', 'Asuntos', 'Actualizado Correctamente');
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
