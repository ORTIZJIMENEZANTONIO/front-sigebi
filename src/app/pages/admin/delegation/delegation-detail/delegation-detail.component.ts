import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService, NbWindowRef, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { DelegationService } from '../../../../@core/backend/common/services/delegation.service';
import { Delegation } from '../../../../@core/interfaces/auction/Delegation.model';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-delegation-detail',
  templateUrl: './delegation-detail.component.html',
  styleUrls: ['./delegation-detail.component.scss']
})
export class DelegationDetailComponent extends BasePage implements OnInit{
  public formDelegation: FormGroup;
  private data: Delegation;
  public actionBtn: string = "Guardar";

  constructor(
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: DelegationService,
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
    this.formDelegation = this.fb.group({
      id: [''],
      description: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(80)])],
      zoneContractCVE: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(80)])],
      diffHours: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(80)])],
      phaseEdo: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(80)])],
      zoneVigilanceCVE: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(80)])],
      numRegister: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(80)])]

    });
    if (this.data) {
      this.actionBtn = "Actualizar";
      this.formDelegation.patchValue(this.data)

    }
  }

  public get description() { return this.formDelegation.get('description'); }
  public get zoneContractCVE() { return this.formDelegation.get('numRegister'); }
  public get diffHours() { return this.formDelegation.get('diffHours'); }
  public get phaseEdo() { return this.formDelegation.get('phaseEdo'); }
  public get zoneVigilanceCVE() { return this.formDelegation.get('zoneVigilanceCVE'); }
  public get numRegister() { return this.formDelegation.get('numRegister'); }

  public register(): void {
    const data = this.formDelegation.getRawValue();
    this.actionBtn == "Guardar" ? this.createRegister(data) : this.updateRegister(data);
  }
  private createRegister(data): void {
    this.service.register(data).subscribe(
      () => {
        this.onLoadFailed('success', 'Delegación', 'Registrado Correctamente');
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
        this.onLoadFailed('success', 'Delegación detalles', 'Actualizado Correctamente');
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
