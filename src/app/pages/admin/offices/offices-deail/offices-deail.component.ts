import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { OfficesService } from '../../../../@core/backend/common/services/offices.service';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-offices-deail',
  templateUrl: './offices-deail.component.html',
  styleUrls: ['./offices-deail.component.scss']
})
export class OfficesDeailComponent extends BasePage implements OnInit {

  public form: FormGroup;
  private data: any = {};
  public actionBtn: string = "Guardar";

  constructor(
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: OfficesService,
    public windowRef: NbWindowRef,
    @Inject(NB_WINDOW_CONTEXT) context
    ) {
    super();
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
      name: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(80)])],
      street: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(60)])],
      noExt: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(10)])],
      noInt: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(10)])],
      colony: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(100)])],
      municipalDelegate: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(60)])],
      postalCode: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(50)])],
      rfc: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(20)])],
      phone: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(20)])],
      phoneTwo: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(20)])],
      fax: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(20)])],
      typeOffice: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(1)])],
      noRegistration: [null, Validators.compose([Validators.pattern(""), Validators.required])],
    });
    if (this.data.id != null) {
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.data);
    }
  }

  public get name() { return this.form.get('name'); }
  public get street() { return this.form.get('street'); }
  public get noExt() { return this.form.get('noExt'); }
  public get noInt() { return this.form.get('noInt'); }
  public get colony() { return this.form.get('colony'); }
  public get municipalDelegate() { return this.form.get('municipalDelegate'); }
  public get postalCode() { return this.form.get('postalCode'); }
  public get rfc() { return this.form.get('rfc'); }
  public get phone() { return this.form.get('phone'); }
  public get phoneTwo() { return this.form.get('phoneTwo'); }
  public get fax() { return this.form.get('fax'); }
  public get typeOffice() { return this.form.get('typeOffice'); }
  public get noRegistration() { return this.form.get('noRegistration'); }

  public register(): void {
    const data = this.form.getRawValue();
    this.actionBtn == "Guardar" ? this.createRegister(data) : this.updateRegister(data);
  }
  private createRegister(data): void {
    this.service.register(data).subscribe(
      data => {
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
      data => {
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
