import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService, NbWindowRef, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { DrawerService } from '../../../../@core/backend/common/services/drawer.service';
import { OfficesService } from '../../../../@core/backend/common/services/offices.service';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-drawer-detail',
  templateUrl: './drawer-detail.component.html',
  styleUrls: ['./drawer-detail.component.scss']
})
export class DrawerDetailComponent extends BasePage {

 
  public form: FormGroup;
  private data: any = {};
  public actionBtn: string = "Guardar";

  constructor(
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: DrawerService,
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
      noDrawer: [null,Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(10)])],
      noBobeda: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(10)])],
      status: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(2)])],
      noRegistration: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(10)])],
    });

    if (this.data.noDrawer != null) {
      this.actionBtn = "Actualizar";
      this.form.controls['noDrawer'].disable();
      this.form.controls['noBobeda'].disable();
      this.form.patchValue(this.data);
    }
  }

  public get noBobeda() { return this.form.get('noBobeda'); }
  public get noDrawer() { return this.form.get('noDrawer');             }
  public get statuss() { return this.form.get('status');                }
  public get noRegistration() { return this.form.get('noRegistration'); }
  

  public register(): void {
    const data = this.form.getRawValue();
    this.actionBtn == "Guardar" ? this.createRegister(data) : this.updateRegister(data);
  }
  private createRegister(data): void {
    this.service.register(data).subscribe(
      data => {
        this.onLoadFailed('success', 'Gavetas', 'Registrado Correctamente');
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
    let params ={
      noBobeda:data.noBobeda,
      status:data.status,
      noRegistration:data.noRegistration
    }
    this.service.update(this.data.noDrawer, params).subscribe(
      data => {
        this.onLoadFailed('success', 'Gavetas', 'Actualizado Correctamente');
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
