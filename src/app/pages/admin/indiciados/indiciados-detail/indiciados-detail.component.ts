import { isNull } from '@angular/compiler/src/output/output_ast';
import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService, NbToastrService } from '@nebular/theme';
import { IndiciadosService } from '../../../../@core/backend/common/services/indiciados.service';
import { Indiciados } from '../../../../@core/interfaces/auction/indiciados.model';
import { SweetAlertConstants, SweetalertModel } from '../../../../@core/interfaces/auction/sweetalert-model';
import { BasePage } from '../../../../@core/shared/base-page';
import { SweetalertService } from '../../../../shared/sweetalert.service';

@Component({
  selector: 'ngx-indiciados-detail',
  templateUrl: './indiciados-detail.component.html',
  styleUrls: ['./indiciados-detail.component.scss']
})
export class IndiciadosDetailComponent extends BasePage {

  data: Indiciados;

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: IndiciadosService,    
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService, public toastrService: NbToastrService, public sweetalertService: SweetalertService) { 
      super(toastrService);
      if (null != context.Indiciados){
        this.data = context.Indiciados;
      }
    }
    actionBtn : string = "Guardar";

    form = this.fb.group({

      id:[''],

      name: ['', Validators.required],

      noRegistration:['',Validators.required],

      curp : ['',[Validators.required]],
  
      consecutive: ['',[Validators.required]]

    });
  
  get validate(){
    return this.form.controls;
  }
    
  ngOnInit(): void {
    
    if(this.data){
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.data)     
    }
  }

  register(): void {
    let params = {
      name: this.form.value.name,
      noRegistration: this.form.value.noRegistration,
      curp: this.form.value.curp,
      consecutive: this.form.value.consecutive
    }    
    if( this.actionBtn == "Guardar"){
      this.service.register(params).subscribe(data =>{
        this.onLoadFailed('success', 'Indiciado', 'Registrado Correctamente');
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
        this.onLoadFailed('success', 'Indiciado', 'Actualizado Correctamente');
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

  private sweetAlertMessage(title: string, message: string) {
    let sweetalert = new SweetalertModel();
    sweetalert.title = title;
    sweetalert.text = message;
    sweetalert.icon = SweetAlertConstants.SWEET_ALERT_WARNING;
    sweetalert.showConfirmButton = true;
    sweetalert.showCancelButton = false;
    this.sweetalertService.showAlertBasic(sweetalert);
  }
  private sweetAlertSuccessMessage(title: string) {
    let sweetalert = new SweetalertModel();
    sweetalert.title = title;
    sweetalert.showConfirmButton = false;
    sweetalert.showCancelButton = false;
    sweetalert.timer = SweetAlertConstants.SWEET_ALERT_TIMER_1500;
    this.sweetalertService.showAlertBasic(sweetalert);
  }
}
