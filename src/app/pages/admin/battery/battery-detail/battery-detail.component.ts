import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService, NbWindowRef, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { BatteryService } from '../../../../@core/backend/common/services/battery.service';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-battery-detail',
  templateUrl: './battery-detail.component.html',
  styleUrls: ['./battery-detail.component.scss']
})

export class BatteryDetailComponent extends BasePage implements OnInit {
  public form: FormGroup;
  private data: any = {};
  public actionBtn: string = "Guardar";

  constructor(
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: BatteryService,
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
    idBattery:[null],
    description: [null, Validators.compose([Validators.required])],
    registerNumber: [null, Validators.compose([Validators.required])],
    status: [null, Validators.compose([Validators.required])],
    storeCode: [null, Validators.compose([Validators.required])]
    });

    if (this.data.id != null) {
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.data);
    }
  }

  public get storeCode() { return this.form.get('storeCode'); }
  public get description() { return this.form.get('description'); }
  public get registerNumber() { return this.form.get('registerNumber'); }
  public get estatus() { return this.form.get('status'); }

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
