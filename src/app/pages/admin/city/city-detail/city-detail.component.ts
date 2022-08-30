import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

import { Router } from '@angular/router';
import { NbToastrService, NbWindowRef, NbWindowService, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { BehaviorSubject, Observable } from 'rxjs';
import { CityService } from '../../../../@core/backend/common/services/city.service';
import { DelegationService } from '../../../../@core/backend/common/services/delegation.service';
import { SubdelegationService } from '../../../../@core/backend/common/services/subdelegation.service';
import { City } from '../../../../@core/interfaces/auction/City.model';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.scss']

})
export class CityDetailComponent extends BasePage {

  public formCity: FormGroup;
  private data: City;
  public actionBtn: string = "Guardar";
  public filteredOptions$: BehaviorSubject<any[]> = new BehaviorSubject([]);
  public filteredsubdelegations$: BehaviorSubject<any[]> = new BehaviorSubject([]);
  constructor(
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: CityService,
    public windowRef: NbWindowRef,
    private delegationService: DelegationService,
    private subDelegationService: SubdelegationService,
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
  private prepareForm() {
    this.formCity = this.fb.group({
      id: [''],
      name: [null, Validators.compose([Validators.pattern("[a-zA-Z]((\.|_|-)?[a-zA-ZáéíóúÁÉÍÓÚ\u0020]+){0,255}"), Validators.required])],
      cityCode: ['', Validators.required],
      detailDelegation: [null, Validators.required],
      numDelegation: [null, [Validators.min(1)]],
      detailSubDelegation: [null, Validators.required],
      numSubDelegation: [null, [Validators.min(1)]],
      legendOffice: [null, [Validators.required]],
      numRegister: [null, [Validators.required]],
    });
    if (this.data) {
      this.actionBtn = "Actualizar";
      this.formCity.patchValue(this.data)
      
      this.formCity.controls['numDelegation'].setValue(this.data.numDelegation['id'])
      this.formCity.controls['detailDelegation'].setValue(this.data.numDelegation['descripcion'])
      this.formCity.controls['numSubDelegation'].setValue(this.data.numSubDelegation['id'])
      this.formCity.controls['detailSubDelegation'].setValue(this.data.numSubDelegation['descripcion'])
      
    }
    this.formCity.controls['detailDelegation'].valueChanges.subscribe((value: string) => {
      if (value) {
        this.delegationService.search(value).subscribe(data => {
          this.filteredOptions$.next(data);
        })
      }
    })
    this.formCity.controls['detailSubDelegation'].valueChanges.subscribe((value: string) => {
      if (value) {
        this.subDelegationService.search(value).subscribe(data => {
          this.filteredsubdelegations$.next(data);
        })
      }
    })
  }

  public get name() { return this.formCity.get('name'); }
  public get cityCode() { return this.formCity.get('cityCode'); }
  public get detailDelegation() { return this.formCity.get('detailDelegation'); }
  public get numDelegation() { return this.formCity.get('numDelegation'); }
  public get detailSubDelegation() { return this.formCity.get('detailSubDelegation'); }
  public get numSubDelegation() { return this.formCity.get('numSubDelegation'); }
  public get legendOffice() { return this.formCity.get('legendOffice'); }
  public get numRegister() { return this.formCity.get('numRegister'); }

  public onSelectionChangeDelegation(event){
    if(event.id){
      this.formCity.controls['numDelegation'].setValue(event.id);
      this.formCity.controls['detailDelegation'].setValue(event.description);
    }
        
  }
  public onSelectionChangeSubdelegation(event){
    if(event.id){
      this.formCity.controls['numSubDelegation'].setValue(event.id);
      this.formCity.controls['detailSubDelegation'].setValue(event.description);
    }
  }

  public register(): void {
    const data = this.formCity.getRawValue();
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
