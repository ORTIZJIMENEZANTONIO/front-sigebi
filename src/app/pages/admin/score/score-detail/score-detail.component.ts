import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService, NbToastrService } from '@nebular/theme';
import { ScoreService } from '../../../../@core/backend/common/services/score.service';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-score-detail',
  templateUrl: './score-detail.component.html',
  styleUrls: ['./score-detail.component.scss']
})
export class ScoreDetailComponent extends BasePage {

  public form: FormGroup;
  private data: any = {};
  public actionBtn: string = "Guardar";
  constructor(private fb: FormBuilder, 
    protected cd: ChangeDetectorRef, 
    protected router: Router, 
    private service: ScoreService,
    public windowRef: NbWindowRef, 
    @Inject(NB_WINDOW_CONTEXT) context, 
    private dom: DomSanitizer,  
    public toastrService: NbToastrService,
    private windowService: NbWindowService) { 
      super(toastrService);
      if (null != context.data){
        this.data = context.data;
      }

    this.form = this.fb.group({
      
      code:[null, Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9@.-_-]{1,2}")])],
      initialRank: [null, Validators.compose([Validators.pattern("[0-9]{1,255}"),Validators.required])],
      endRank: [null, Validators.compose([Validators.pattern("[0-9]{1,255}"),Validators.required])],
      clasification: [null, Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9@.-_-]{1,500}")])],
      registryNumber: [null, Validators.compose([Validators.pattern("[0-9]{1,255}"),Validators.required])],

    });

    if (this.data.code != null) {
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.data);
      this.form.controls['code'].disable();
    }

   } 

   public get code() { return this.form.get('code'); }
   public get initialRank() { return this.form.get('initialRank'); }
   public get endRank() { return this.form.get('endRank'); }
   public get clasification() { return this.form.get('clasification'); }
   public get registryNumber() { return this.form.get('registryNumber'); }
  
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
    delete data.code;
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
