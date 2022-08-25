import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService, NbToastrService } from '@nebular/theme';
import { ScoreService } from '../../../../@core/backend/common/services/score.service';
import { SweetAlertConstants, SweetalertModel } from '../../../../@core/interfaces/auction/sweetalert-model';
import { BaseApp } from '../../../../@core/shared/base-app';
import { BasePage } from '../../../../@core/shared/base-page';
import { SweetalertService } from '../../../../shared/sweetalert.service';

@Component({
  selector: 'ngx-score-detail',
  templateUrl: './score-detail.component.html',
  styleUrls: ['./score-detail.component.scss']
})
export class ScoreDetailComponent extends BasePage {

  Form: FormGroup;
  data: any = {};

  constructor(
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: ScoreService,
    public windowRef: NbWindowRef,
    @Inject(NB_WINDOW_CONTEXT) context,
    private dom: DomSanitizer,
    private windowService: NbWindowService,
    public toA: NbToastrService,
    public sweetalertService: SweetalertService) {
    super(toA);
    if (null != context.data) {
      this.data = context.data;
    }
  }
  actionBtn: string = "Guardar";
   
  

    form = this.fb.group({
      
      code:[null, Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9@.-_-]{1,2}")])],
      initialRank: [null, Validators.compose([Validators.pattern("[0-9]{1,255}"),Validators.required])],
      endRank: [null, Validators.compose([Validators.pattern("[0-9]{1,255}"),Validators.required])],
      clasification: [null, Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9@.-_-]{1,500}")])],
      registryNumber: [null, Validators.compose([Validators.pattern("[0-9]{1,255}"),Validators.required])],

    });
    
   
   get validateScore() {
    return this.form.controls;
  }
  ngOnInit(): void {
    if (this.data.id != null) {
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.data);
    }

  }

  public register(): void {
    const data = this.form.getRawValue();
    this.actionBtn == "Guardar" ? this.createRegister(data) : this.updateRegister(data);
  }
  private createRegister(data): void {
    this.service.register(data).subscribe(
      data => {
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
      data => {
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
