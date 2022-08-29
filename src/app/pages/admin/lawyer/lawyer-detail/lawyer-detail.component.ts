import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService, NbWindowRef, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { LawyerService } from '../../../../@core/backend/common/services/lawyer.service';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';
import { BasePage } from '../../../../@core/shared/base-page';



@Component({
  selector: 'ngx-lawyer-detail',
  templateUrl: './lawyer-detail.component.html',
  styleUrls: ['./lawyer-detail.component.scss']
})
export class LawyerDetailComponent extends BasePage implements OnInit {

  public form: FormGroup;
  private data: any = {};
  public actionBtn: string = "Guardar";

  constructor(
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: LawyerService,
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
	    idOffice: [null],
      name: ['', Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(80)])],
      street: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(60)])],
      streetNumber: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(10)])],
      apartmentNumber: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(10)])],
      suburb: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(100)])],
      delegation: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(60)])],
      zipCode: [null, Validators.compose([Validators.pattern(""), Validators.required])],
      rfc: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(20)])],
      phone: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(20)])],
      registerNumber: [null, Validators.compose([Validators.pattern(""), Validators.required])],
    });
    if (this.data.id != null) {
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.data);
    }
  }

  public get id() { return this.form.get('id'); }
  public get idOffice() { return this.form.get('idOffice'); }
  public get name() { return this.form.get('name'); }
  public get street() { return this.form.get('street'); }
  public get streetNumber() { return this.form.get('streetNumber'); }  
  public get apartmentNumber() { return this.form.get('apartmentNumber'); }
  public get suburb() { return this.form.get('suburb'); }
  public get delegation() { return this.form.get('delegation'); } 
  public get zipCode() { return this.form.get('zipCode'); }
  public get rfc() { return this.form.get('rfc'); }
  public get phone() { return this.form.get('phone'); } 
  public get registerNumber() { return this.form.get('registerNumber'); } 

  public register(): void {
    const data = this.form.getRawValue();
    this.actionBtn == "Guardar" ? this.createRegister(data) : this.updateRegister(data);
  }
  private createRegister(data): void {
    this.service.register(data).subscribe(
      data => {
        this.onLoadFailed('success', 'Abogado', 'Registrado Correctamente');
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
        this.onLoadFailed('success', 'Abogado', 'Actualizado Correctamente');
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