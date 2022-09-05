import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService, NbToastrService } from '@nebular/theme';
import { BehaviorSubject } from 'rxjs';
import { STRING_PATTERN } from '../../../../@components/constants';
import { DelegationService } from '../../../../@core/backend/common/services/delegation.service';
import { DepartamentService } from '../../../../@core/backend/common/services/departament.service';
import { SubdelegationService } from '../../../../@core/backend/common/services/subdelegation.service';
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

  public filteredOptions$: BehaviorSubject<any[]> = new BehaviorSubject([]);
  public filteredsubdelegations$: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: DepartamentService,
    public windowRef: NbWindowRef,
    private delegationService: DelegationService,
    private subDelegationService: SubdelegationService,
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
    this.formDepartament = this.fb.group({
      id: ['',Validators.required],
      detailDelegation: ["", Validators.required,Validators.pattern(STRING_PATTERN)],
      numDelegation: ["", [Validators.required]],
      detailSubDelegation: ["", [Validators.required,Validators.pattern(STRING_PATTERN)]],
      numSubDelegation: ["", [Validators.required]],
      dsarea: ['', [Validators.required,Validators.maxLength(30)]],
      description: ['', [Validators.required, Validators.maxLength(200)]],
      lastOffice: ['',Validators.maxLength(10)],
      numRegister: ['', Validators.required],
      level: ['',Validators.maxLength(2)],
      depend: ['', Validators.required],
      depDelegation: ['', [Validators.required, Validators.maxLength(4)]],
      phaseEdo: ['', Validators.required]
    });
    if (this.data) {
      this.actionBtn = "Actualizar";
      this.formDepartament.patchValue(this.data)
      this.formDepartament.controls['numDelegation'].setValue(this.data.numDelegation['id'])
      this.formDepartament.controls['detailDelegation'].setValue(this.data.numDelegation['description'])
      this.formDepartament.controls['numSubDelegation'].setValue(this.data.numSubDelegation['id'])
      this.formDepartament.controls['detailSubDelegation'].setValue(this.data.numSubDelegation['description'])
    }
    this.delegationService.search("").subscribe(data => {
      this.filteredOptions$.next(data);
    })
    this.delegationService.search("").subscribe(data => {
      this.filteredOptions$.next(data);
    })

    this.formDepartament.controls['detailDelegation'].valueChanges.subscribe((value: string) => {
      if (value) {
        this.delegationService.search(value).subscribe(data => {
          this.filteredOptions$.next(data);
        })
      }
    })
    this.formDepartament.controls['detailSubDelegation'].valueChanges.subscribe((value: string) => {
      if (value) {
        this.subDelegationService.search(value).subscribe(data => {
          this.filteredsubdelegations$.next(data);
        })
      }
    })

  }

  public get id() { return this.formDepartament.get('id'); }
  public get detailDelegation() { return this.formDepartament.get('detailDelegation'); }
  public get numDelegation() { return this.formDepartament.get('numDelegation'); }
  public get detailSubDelegation() { return this.formDepartament.get('detailSubDelegation'); }
  public get numSubDelegation() { return this.formDepartament.get('numSubDelegation'); }
  public get dsarea() { return this.formDepartament.get('dsarea'); }
  public get description() { return this.formDepartament.get('description'); }
  public get lastOffice() { return this.formDepartament.get('lastOffice'); }
  public get numRegister() { return this.formDepartament.get('numRegister'); }
  public get level() { return this.formDepartament.get('level'); }
  public get depend() { return this.formDepartament.get('depend'); }
  public get depDelegation() { return this.formDepartament.get('depDelegation'); }
  public get phaseEdo() { return this.formDepartament.get('phaseEdo'); }


  public onSelectionChangeDelegation(event){
    if(event.id){
      this.formDepartament.controls['numDelegation'].setValue(event.id);
      this.formDepartament.controls['detailDelegation'].setValue(event.description);
    }
        
  }
  public onSelectionChangeSubdelegation(event){
    if(event.id){
      this.formDepartament.controls['numSubDelegation'].setValue(event.id);
      this.formDepartament.controls['detailSubDelegation'].setValue(event.description);
    }
  }

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
    data.detailDelegation = null;
    data.detailSubDelegation = null;
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
