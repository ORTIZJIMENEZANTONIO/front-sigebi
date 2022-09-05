import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService, NbToastrService } from '@nebular/theme';
import { IdentifierService } from '../../../../@core/backend/common/services/identifier.service';
import { Identifier } from '../../../../@core/interfaces/auction/identifier.model';
import { SweetAlertConstants, SweetalertModel } from '../../../../@core/interfaces/auction/sweetalert-model';
import { BasePage } from '../../../../@core/shared/base-page';
import { SweetalertService } from '../../../../shared/sweetalert.service';

@Component({
  selector: 'ngx-identifier-detail',
  templateUrl: './identifier-detail.component.html',
  styleUrls: ['./identifier-detail.component.scss']
})
export class IdentifierDetailComponent extends BasePage {

  data: Identifier;

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: IdentifierService,    
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService, public toastrService: NbToastrService, public sweetalertService: SweetalertService) { 
      super(toastrService);
      if (null != context.data){
        this.data = context.data;
      }
    }
    actionBtn : string = "Guardar";

    form = this.fb.group({

      code: ['', Validators.required],

      description: ['', Validators.required],

      keyview:['',[Validators.required, Validators.minLength(1), Validators.maxLength(1)]],

      noRegistration : ['',[Validators.required]]

    });
  
  get validate(){
    return this.form.controls;
  }
    
  ngOnInit(): void {

    if(this.data){
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.data);
      this.form.controls['code'].disable();
    }
    
  }

  register(): void {
    let params = {
      code: this.form.value.code,
      description: this.form.value.description,
      keyview: this.form.value.keyview,
      noRegistration: this.form.value.noRegistration
    }
    
    if( this.actionBtn == "Guardar"){
      this.service.register(params).subscribe(data => {
        this.onLoadFailed('success', 'Identificador', 'Registrado Correctamente');
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
      this.service.update(this.data.code, params).subscribe(data =>{
        this.onLoadFailed('success', 'Identificador', 'Actualizado Correctamente');
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
