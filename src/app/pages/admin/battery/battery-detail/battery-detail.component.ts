import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService, NbWindowRef, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';
import { BasePage } from '../../../../@core/shared/base-page';
import { BehaviorSubject } from 'rxjs';
import { NUMBERS_PATTERN, STRING_PATTERN } from '../../../../@components/constants';
import { BatteryService } from '../../../../@core/backend/common/services/battery.service';
import { BatteryInterface } from '../../../../@core/interfaces/auction/battery.model';
import { SaveValuesService } from '../../../../@core/backend/common/services/save-values.service';

@Component({
  selector: 'ngx-battery-detail',
  templateUrl: './battery-detail.component.html',
  styleUrls: ['./battery-detail.component.scss']
})
export class BatteryDetailComponent extends BasePage implements OnInit {
  public form: FormGroup;
  private data: BatteryInterface;
  public actionBtn: string = "Guardar";
  public filteredOptions$: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: BatteryService,
    public windowRef: NbWindowRef,
    public toastrService: NbToastrService,
    private saveService: SaveValuesService,
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
    idBattery:[null, Validators.compose([Validators.pattern(NUMBERS_PATTERN), Validators.required])],
    storeDesc: [ null, Validators.compose([ Validators.pattern(STRING_PATTERN)])],
    description: [null, Validators.compose([Validators.pattern(STRING_PATTERN), Validators.required, Validators.maxLength(30)])],
    registerNumber: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(20)])],
    status: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(1)])],
    storeCode: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(5)])]
    });

    if (this.data) { 
      const dataUpdt = {
        ...this.data,
        storeCode: this.data.storeCode.cve,
        storeDesc: this.data.storeCode.description
      } 
      this.actionBtn = "Actualizar";
      this.form.patchValue(dataUpdt);
      this.form.controls['storeDesc'].disable();
      this.form.controls['idBattery'].disable()
    }
    this.form.controls['storeDesc'].valueChanges.subscribe((value: string) => {
      if (value) {
        this.saveService.search(value).subscribe(data => {
          this.filteredOptions$.next(data);
        })
      }
    })
  }

  public get idBattery() { return this.form.get('idBattery'); }
  public get storeDesc() { return this.form.get('storeDesc'); }
  public get storeCode() { return this.form.get('storeCode'); }
  public get description() { return this.form.get('description'); }
  public get registerNumber() { return this.form.get('registerNumber'); }
  public get estatus() { return this.form.get('status'); }


  public onSelectionChange(event){
   
    if(event.cve){
      this.form.controls['storeCode'].setValue(event.cve);
      this.form.controls['storeDesc'].setValue(event.description);
    }
        
  }

  public register(): void {
    const data = this.form.getRawValue();
    this.actionBtn == "Guardar" ? this.createRegister(data) : this.updateRegister(data);
  }
  private createRegister(data): void {
    this.service.register(data).subscribe(
      data => {
        this.onLoadFailed('success', 'Bateria', 'Registrado Correctamente');
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
    delete data.idBattery;
    delete data.storeCode;
    this.service.update( {idBattery:this.data.idBattery, storeCode: this.data.storeCode.cve}, data).subscribe(
      data => {
        this.onLoadFailed('success', 'Bateria', 'Actualizado Correctamente');
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
