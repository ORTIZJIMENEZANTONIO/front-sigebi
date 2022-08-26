import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService, NbWindowRef, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';
import { BasePage } from '../../../../@core/shared/base-page';

import { NUMBERS_PATTERN, STRING_PATTERN } from '../../../../@components/constants';

import { QAccumulatedGoodsInterface } from '../../../../@core/interfaces/auction/q-accumulated-goods.model'; 
import { QAccumulatedGoodsService } from '../../../../@core/backend/common/services/q-accumulated-goods.service';

@Component({
  selector: 'ngx-q-accumulated-goods-detail',
  templateUrl: './q-accumulated-goods-detail.component.html',
  styleUrls: ['./q-accumulated-goods-detail.component.scss']
})
export class QAccumulatedGoodsDetailComponent extends BasePage {

  public form: FormGroup;
  private data: QAccumulatedGoodsInterface;
  public actionBtn: string = "Guardar";

  constructor(
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: QAccumulatedGoodsService,
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

  private prepareForm(): void { //Validaciones de los datos, EN MODAL
    this.form = this.fb.group({

    numDelegacion: [null, Validators.compose([Validators.required, Validators.pattern(STRING_PATTERN), Validators.maxLength(2),  Validators.minLength(1) ])],
    desDelegacion: [null, Validators.compose([Validators.required, Validators.pattern(STRING_PATTERN), Validators.maxLength(2),  Validators.minLength(1) ])],
    numSubdelegacion: [null, Validators.compose([Validators.required, Validators.pattern(STRING_PATTERN), Validators.maxLength(2),  Validators.minLength(1) ])],
    desSubDelegacion: [null, Validators.compose([Validators.required, Validators.pattern(STRING_PATTERN), Validators.maxLength(2),  Validators.minLength(1) ])],
    delFecha: [null, Validators.compose([Validators.required, Validators.pattern(STRING_PATTERN), Validators.maxLength(2),  Validators.minLength(1) ])],
    alFecha: [null, Validators.compose([Validators.required, Validators.pattern(STRING_PATTERN), Validators.maxLength(2),  Validators.minLength(1) ])],
      
      
    });
    if (this.data) {
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.data);
    }
  }

  //Aqui manda a llamar a los datos de interface ya guardados,en MODAL
  public get numDelegacion() { return this.form.get('numDelegacion'); }
  public get desDelegacion() { return this.form.get('desDelegacion'); }
  public get numSubdelegacion() { return this.form.get('numSubdelegacion'); }
  public get esSubDelegacion() { return this.form.get('esSubDelegacion'); }
  public get elFecha() { return this.form.get('delFecha'); }
  public get alFecha() { return this.form.get('alFecha'); }

  public register(): void {
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
    this.service.update(this.data.numDelegacion, data).subscribe(
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
