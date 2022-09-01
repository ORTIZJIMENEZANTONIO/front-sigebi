import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService, NbWindowRef, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { NUMBERS_PATTERN, PHONE_PATTERN, STRING_PATTERN } from '../../../../@components/constants';
import { CourtService } from '../../../../@core/backend/common/services/court.service';
import { Court } from '../../../../@core/interfaces/auction/court.model';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-court-detail',
  templateUrl: './court-detail.component.html',
  styleUrls: ['./court-detail.component.scss']
})
export class CourtDetailComponent extends BasePage implements OnInit{
  public formCourt: FormGroup;
  private data: Court;
  public actionBtn: string = "Guardar";

  constructor(
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: CourtService,
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
    this.formCourt = this.fb.group({
      id:[''],
  
      description: ['', [Validators.required,Validators.maxLength(100),Validators.pattern(STRING_PATTERN)]],
      manager: ['', [Validators.maxLength(100),Validators.pattern(STRING_PATTERN)]],
      street: ['', [Validators.maxLength(60)]],
      numExterior: ['', [Validators.maxLength(10)]],
      numInside: ['', [Validators.maxLength(10)]],
      cologne: ['', [Validators.maxLength(100),Validators.pattern(STRING_PATTERN)]],
      delegationMun: ['', [Validators.maxLength(60),Validators.pattern(STRING_PATTERN)]],
      zipCode: ['', [Validators.maxLength(5),Validators.pattern(NUMBERS_PATTERN)]],
      numPhone: ['', [Validators.maxLength(20),Validators.pattern(PHONE_PATTERN)]],
      circuitCVE: ['', [Validators.maxLength(15)]],
      numRegister: ['', [Validators.required,Validators.pattern(NUMBERS_PATTERN)]]
      });
    if (this.data) {
      this.actionBtn = "Actualizar";
      this.formCourt.patchValue(this.data)
    }
  }

  public get description() { return this.formCourt.get('description'); }
  public get manager() { return this.formCourt.get('manager'); }
  public get street() { return this.formCourt.get('street'); }
  public get numExterior() { return this.formCourt.get('numExterior'); }
  public get numInside() { return this.formCourt.get('numInside'); }
  public get cologne() { return this.formCourt.get('cologne'); }
  public get delegationMun() { return this.formCourt.get('delegationMun'); }
  public get zipCode() { return this.formCourt.get('zipCode'); }
  public get numPhone() { return this.formCourt.get('numPhone'); }
  public get circuitCVE() { return this.formCourt.get('circuitCVE'); }
  public get numRegister() { return this.formCourt.get('numRegister'); }

  public register(): void {
    const data = this.formCourt.getRawValue();
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
