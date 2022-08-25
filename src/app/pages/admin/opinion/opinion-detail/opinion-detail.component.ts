import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService, NbToastrService } from '@nebular/theme';
import { OpinionService } from '../../../../@core/backend/common/services/opinion.service';
import { Opinion } from '../../../../@core/interfaces/auction/opinion.model';
import { SweetAlertConstants, SweetalertModel } from '../../../../@core/interfaces/auction/sweetalert-model';
import { BasePage } from '../../../../@core/shared/base-page';
import { SweetalertService } from '../../../../shared/sweetalert.service';

@Component({
  selector: 'ngx-opinion-detail',
  templateUrl: './opinion-detail.component.html',
  styleUrls: ['./opinion-detail.component.scss']
})
export class OpinionDetailComponent extends BasePage {

  data: any = {};

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: OpinionService,    
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService, public toastrService: NbToastrService, public sweetalertService: SweetalertService) { 
      super(toastrService);
      if (null != context.data){
        this.data = context.data;
      }
    }
    actionBtn : string = "Guardar";

    form = this.fb.group({

      id:[null],

      description: [null, Validators.required],

      noRegistration:[null,Validators.required],

      dict_ofi : [null,[Validators.required]],
  
      areaProcess: [null,[Validators.required]]

    });
  
  get validate(){
    return this.form.controls;
  }
    
  ngOnInit(): void {    
    if (this.data.id != null) {
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.data);
    }
  }

  register(): void {
    let params = {
      description: this.form.value.description,
      noRegistration: this.form.value.noRegistration,
      dict_ofi: this.form.value.dict_ofi,
      areaProcess: this.form.value.areaProcess
    }
    
    if( this.actionBtn == "Guardar"){
      this.service.register(params).subscribe(data => {
        this.onLoadFailed('success', 'Dictamen', 'Registrado Correctamente');
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
    }else{
      this.service.update(this.data.id,params).subscribe(data =>{
        this.onLoadFailed('success', 'Dictamen', 'Actualizado Correctamente');
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
}
