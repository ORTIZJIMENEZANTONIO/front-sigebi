import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService, NbToastrService } from '@nebular/theme';
import { SaveValuesService } from '../../../../@core/backend/common/services/save-values.service';
import { SaveValues } from '../../../../@core/interfaces/auction/save-values.model';
import { SweetAlertConstants, SweetalertModel } from '../../../../@core/interfaces/auction/sweetalert-model';
import { BasePage } from '../../../../@core/shared/base-page';
import { SweetalertService } from '../../../../shared/sweetalert.service';

@Component({
  selector: 'ngx-save-values-detail',
  templateUrl: './save-values-detail.component.html',
  styleUrls: ['./save-values-detail.component.scss']
})
export class SaveValuesDetailComponent extends 
BasePage {

  data: SaveValues;

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: SaveValuesService,    
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService, public toastrService: NbToastrService, public sweetalertService: SweetalertService) { 
      super(toastrService);
      if (null != context.data){
        this.data = context.data;
      }
    }
    actionBtn : string = "Guardar";

    form = this.fb.group({

      cve: ['', Validators.required],

      description: ['', Validators.required],

      location:['',Validators.required],

      responsible : ['',[Validators.required]],
  
      noRegistration: ['',[Validators.required]]

    });
  
  get validate(){
    return this.form.controls;
  }
    
  ngOnInit(): void {    
    if(this.data){
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.data);
      this.form.controls['cve'].disable();
    }
  }

  register(): void {
    let params = {
      cve: this.form.value.cve,
      description: this.form.value.description,
      location: this.form.value.location,
      responsible: this.form.value.responsible,
      noRegistration: this.form.value.noRegistration
    }
    
    if( this.actionBtn == "Guardar"){
      this.service.register(params).subscribe(data =>{
        this.onLoadFailed('success', 'Guarda valores', 'Registrado Correctamente');
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
      this.service.update(this.data.cve, params).subscribe(data =>{
        this.onLoadFailed('success', 'Guarda valores', 'Actualizado Correctamente');
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
