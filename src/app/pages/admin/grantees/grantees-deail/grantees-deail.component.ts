import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbToastrService, NbWindowRef, NbWindowService, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { GranteesService } from '../../../../@core/backend/common/services/grantees.service';
import { SweetAlertConstants, SweetalertModel } from '../../../../@core/interfaces/auction/sweetalert-model';
import { BaseApp } from '../../../../@core/shared/base-app';
import { BasePage } from '../../../../@core/shared/base-page';
import { SweetalertService } from '../../../../shared/sweetalert.service';

@Component({
  selector: 'ngx-grantees-deail',
  templateUrl: './grantees-deail.component.html',
  styleUrls: ['./grantees-deail.component.scss']
})
export class GranteesDeailComponent extends BasePage {

  Form: FormGroup;
  data: any = {};

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: GranteesService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService, public toastrService: NbToastrService, public sweetalertService: SweetalertService) { 
      super(toastrService);
      if (null != context.data){
        this.data = context.data;
      }
    }
    actionBtn : string = "Guardar";

    form = this.fb.group({
      id:[null],
      description: [null, Validators.compose([Validators.pattern(""), Validators.required])],
      puesto: [null, Validators.compose([Validators.pattern(""),Validators.required])],
      type: [null, Validators.compose([Validators.pattern(""),Validators.required])],
      razonSocial: [null, Validators.compose([Validators.pattern(""),Validators.required])],
      street: [null, Validators.compose([Validators.pattern(""),Validators.required])],
      noInside: [null, Validators.compose([Validators.pattern(""),Validators.required])],
      noExterior: [null, Validators.compose([Validators.pattern(""),Validators.required])],
      col: [null, Validators.compose([Validators.pattern(""),Validators.required])],
      nommun: [null, Validators.compose([Validators.pattern(""),Validators.required])],
      nomedo: [null, Validators.compose([Validators.pattern(""),Validators.required])],
      cp: [null, Validators.compose([Validators.pattern(""),Validators.required])],
      usrStatus: [null, Validators.compose([Validators.pattern(""),Validators.required])],
    });
  
    get validateOpinion(){
      return this.form.controls;
    }
    ngOnInit(): void {
      if(this.data.id != null){
        this.actionBtn = "Actualizar";
        this.form.patchValue(this.data);
      }
      
    }
  


  register(): void {
    let params = {
      description:this.form.value.description,
      puesto:this.form.value.puesto,
      type:this.form.value.type,
      razonSocial:this.form.value.razonSocial,
      street:this.form.value.street,
      noInside:this.form.value.noInside,
      noExterior:this.form.value.noExterior,
      col:this.form.value.col,
      nommun:this.form.value.nommun,
      nomedo:this.form.value.nomedo,
      cp:this.form.value.cp,
      usrStatus:this.form.value.usrStatus
    }
    if( this.actionBtn == "Guardar"){
      this.service.register(params).subscribe(data =>{
        this.onLoadFailed('success', 'Donatario', 'Registrado Correctamente');
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
        this.onLoadFailed('success', 'Donatario', 'Actualizado Correctamente');
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
