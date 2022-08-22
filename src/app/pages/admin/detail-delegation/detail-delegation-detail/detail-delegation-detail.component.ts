import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { BehaviorSubject } from 'rxjs';
import { DelegationService } from '../../../../@core/backend/common/services/delegation.service';
import { DetailDelegationService } from '../../../../@core/backend/common/services/detail-delegation.service';
import { SubdelegationService } from '../../../../@core/backend/common/services/subdelegation.service';
import { DetailDelegation } from '../../../../@core/interfaces/auction/detail-delegation.model';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-detail-delegation-detail',
  templateUrl: './detail-delegation-detail.component.html',
  styleUrls: ['./detail-delegation-detail.component.scss']
})
export class DetailDelegationDetailComponent extends BasePage {
  public formDetailDelegation: FormGroup;
  private data: DetailDelegation;
  public actionBtn: string = "Guardar";
  public filteredOptions$: BehaviorSubject<any[]> = new BehaviorSubject([]);
  public filteredsubdelegations$: BehaviorSubject<any[]> = new BehaviorSubject([]);
  constructor(
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: DetailDelegationService,
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
    this.formDetailDelegation = this.fb.group({
      id: [''],
      name: [null, Validators.compose([Validators.pattern("[a-zA-Z]((\.|_|-)?[a-zA-ZáéíóúÁÉÍÓÚ\u0020]+){0,255}"), Validators.required])],
      location: ['', Validators.required],
      address: ['', Validators.required],
      position: ['', Validators.required],
      area: ['', Validators.required],
      mail: ['', Validators.email],

      numP1: ['', Validators.required],
      numP2: ['', Validators.required],
      numP3: ['', Validators.required],

      detailDelegation: [null, Validators.required],
      numDelegation: [null, [Validators.min(1)]],
    });
    if (this.data) {
      this.actionBtn = "Actualizar";
      this.formDetailDelegation.patchValue(this.data)

    }
  }

  public get name() { return this.formDetailDelegation.get('name'); }
  public get location() { return this.formDetailDelegation.get('location'); }
  public get address() { return this.formDetailDelegation.get('address'); }
  public get positionF() { return this.formDetailDelegation.get('position'); }
  public get area() { return this.formDetailDelegation.get('area'); }
  public get mail() { return this.formDetailDelegation.get('mail'); }
  public get numP1() { return this.formDetailDelegation.get('numP1'); }
  public get numP2() { return this.formDetailDelegation.get('numP2'); }
  public get numP3() { return this.formDetailDelegation.get('numP3'); }
  public get detailDelegation() { return this.formDetailDelegation.get('detailDelegation'); }
  public get numDelegation() { return this.formDetailDelegation.get('numDelegation'); }

  public onSelectionChangeDelegation(event) {
    if (event.id) {
      this.numDelegation.patchValue(event.id);
      this.detailDelegation.patchValue(event.descripion);
    }
  }
  public register(): void {
    const data = this.formDetailDelegation.getRawValue();
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
