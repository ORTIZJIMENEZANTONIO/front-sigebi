import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService, NbWindowRef, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { OfficesService } from '../../../../@core/backend/common/services/offices.service';
import { WarehouseService } from '../../../../@core/backend/common/services/warehouse.service';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-warehouse-detail',
  templateUrl: './warehouse-detail.component.html',
  styleUrls: ['./warehouse-detail.component.scss']
})
export class WarehouseDetailComponent extends BasePage implements OnInit {

  public form: FormGroup;
  private data: any = {};
  public actionBtn: string = "Guardar";

  constructor(
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: WarehouseService,
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
      ubication: [null, Validators.compose([Validators.pattern(""), Validators.required])],
      manager: [null, Validators.compose([Validators.pattern(""), Validators.required])],
      registerNumber: [null, Validators.compose([Validators.pattern(""), Validators.required])],
      stateCode: [null, Validators.compose([Validators.pattern(""), Validators.required])],
      cityCode: [null, Validators.compose([Validators.pattern(""), Validators.required])],
      municipalityCode: [null, Validators.compose([Validators.pattern(""), Validators.required])],
      localityCode: [null, Validators.compose([Validators.pattern(""), Validators.required])],
      indActive: [null, Validators.compose([Validators.pattern(""), Validators.required])],
      type: [null, Validators.compose([Validators.pattern(""), Validators.required])],
      responsibleDelegation: [null, Validators.compose([Validators.pattern(""), Validators.required])],
    });
    if (this.data.id != null) {
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.data);
    }
  }

  public get description() { return this.form.get('description'); }
  public get ubication() { return this.form.get('ubication'); }
  public get manager() { return this.form.get('manager'); }
  public get registerNumber() { return this.form.get('registerNumber'); }
  public get stateCode() { return this.form.get('stateCode'); }
  public get cityCode() { return this.form.get('cityCode'); }
  public get municipalityCode() { return this.form.get('municipalityCode'); }
  public get localityCode() { return this.form.get('localityCode'); }
  public get indActive() { return this.form.get('indActive'); }
  public get type() { return this.form.get('type'); }
  public get responsibleDelegation() { return this.form.get('responsibleDelegation'); }

  public register(): void {
    const data = this.form.getRawValue();
    this.actionBtn == "Guardar" ? this.createRegister(data) : this.updateRegister(data);
  }
  private createRegister(data): void {
    this.service.register(data).subscribe(
      data => {
        this.onLoadFailed('success', 'Almacén', 'Registrado Correctamente');
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
        this.onLoadFailed('success', 'Almacén', 'Actualizado Correctamente');
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
