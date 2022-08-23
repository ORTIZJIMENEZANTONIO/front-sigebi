import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { DepartamentService } from '../../../../@core/backend/common/services/departament.service';
import { Departament } from '../../../../@core/interfaces/auction/departament.model';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-departament-detail',
  templateUrl: './departament-detail.component.html',
  styleUrls: ['./departament-detail.component.scss']
})
export class DepartamentDetailComponent extends BasePage {

  public formDepartament: FormGroup;
  private data: Departament;
  public actionBtn: string = "Guardar";

  constructor(
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: DepartamentService,
    public windowRef: NbWindowRef,
    @Inject(NB_WINDOW_CONTEXT) context) {
    super();
    if (null != context.data) {
      this.data = context.data;
    }
  }

  ngOnInit(): void {
    this.prepareForm();
  }
  private prepareForm() {
    this.formDepartament = this.fb.group({
      id: [''],
      numDelegation: ['', Validators.required],
      numSubDelegation: ['', Validators.required],
      dsarea: ['', Validators.required],
      description: ['', Validators.required],
      lastOffice: ['', Validators.required],
      numRegister: ['', Validators.required],
      level: ['', Validators.required],
      depend: ['', Validators.required],
      depDelegation: ['', Validators.required],
      phaseEdo: ['', Validators.required]
    });
    if (this.data) {
      this.actionBtn = "Actualizar";
      this.formDepartament.patchValue(this.data)

    }
  }

  public get numDelegation() { return this.formDepartament.get('numDelegation'); }
  public get numSubDelegation() { return this.formDepartament.get('numSubDelegation'); }
  public get dsarea() { return this.formDepartament.get('dsarea'); }
  public get description() { return this.formDepartament.get('description'); }
  public get lastOffice() { return this.formDepartament.get('lastOffice'); }
  public get numRegister() { return this.formDepartament.get('numRegister'); }
  public get level() { return this.formDepartament.get('level'); }
  public get depend() { return this.formDepartament.get('depend'); }
  public get depDelegation() { return this.formDepartament.get('depDelegation'); }
  public get phaseEdo() { return this.formDepartament.get('phaseEdo'); }

  public register(): void {
    const data = this.formDepartament.getRawValue();
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
