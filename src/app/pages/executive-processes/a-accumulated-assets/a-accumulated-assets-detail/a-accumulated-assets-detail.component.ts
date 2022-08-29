import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService, NbWindowRef, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';
import { BasePage } from '../../../../@core/shared/base-page';

import { NUMBERS_PATTERN, STRING_PATTERN } from '../../../../@components/constants';
import { DelegationService } from '../../../../@core/backend/common/services/delegation.service';
import { Delegation } from '../../../../@core/interfaces/auction/delegation.model';

@Component({
  selector: 'ngx-a-accumulated-assets-detail',
  templateUrl: './a-accumulated-assets-detail.component.html',
  styleUrls: ['./a-accumulated-assets-detail.component.scss']
})
export class AAccumulatedAssetsDetailComponent extends BasePage {

  public form: FormGroup; //modificar form según la categoria
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
    this.form = this.fb.group({
      id: [''],

      description: ['', Validators.required],

      zoneContractCVE: ['', Validators.required],

      diffHours: ['', [Validators.required]],

      phaseEdo: ['', [Validators.required]],

      zoneVigilanceCVE: ['', [Validators.required]],

      numRegister: ['', Validators.required],

    }); //Control de los campos en modal
    if (this.data) {
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.data);
      this.form.controls['id'].disable();
      this.form.controls['description'].disable();
      this.form.controls['zoneContractCVE'].disable();
      this.form.controls['phaseEdo'].disable();
      this.form.controls['zoneVigilanceCVE'].disable();
      this.form.controls['diffHours'].disable();
    }
    
    
  }

  public get description() { return this.form.get('description'); }
  public get zoneContractCVE() { return this.form.get('zoneContractCVE'); }
  public get diffHours() { return this.form.get('diffHours'); }
  public get phaseEdo() { return this.form.get('phaseEdo'); }
  public get zoneVigilanceCVE() { return this.form.get('zoneVigilanceCVE'); }
  public get numRegister() { return this.form.get('numRegister'); }

  public register(): void { //Actualizar, imprimir, PENDIENTE
    const data = this.form.getRawValue();
    this.actionBtn == "Guardar" ? this.createRegister(data) : this.updateRegister(data);
  }

  private createRegister(data): void {
    this.service.register(data).subscribe(
      (res) => {
        this.onLoadFailed('success', 'Serie', 'Registrado Correctamente');
      }, err => {
        const error = err.status === 0
          ? SweetAlertConstants.noConexion
          : err.message;
        this.onLoadFailed('danger', 'Error', error);
      }, () => {
        this.windowRef.close();
      });
  }

  private updateRegister(data): void {
    this.service.update(this.data.id, data).subscribe(
      (response) => {
        this.onLoadFailed('success', 'Serie', 'Actualizado Correctamente');
      }, err => {
        const error = err.status === 0
          ? SweetAlertConstants.noConexion
          : err.message;
        this.onLoadFailed('danger', 'Error', error);
      }, () => {
        this.windowRef.close();
      });
  }

}
