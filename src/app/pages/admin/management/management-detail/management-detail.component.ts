import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbToastrService, NbWindowRef, NbWindowService, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { ManagementService } from '../../../../@core/backend/common/services/management.service';
import { BaseApp } from '../../../../@core/shared/base-app';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-management-detail',
  templateUrl: './management-detail.component.html',
  styleUrls: ['./management-detail.component.scss']
})
export class ManagementDetailComponent extends BasePage {

  Form: FormGroup;
  data: any = {};

  constructor(
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: ManagementService,
    public windowRef: NbWindowRef,
    public toastrService: NbToastrService,
    @Inject(NB_WINDOW_CONTEXT) context,
    private dom: DomSanitizer,
    private windowService: NbWindowService) { 
      super(toastrService);
      if (null != context.data){
        this.data = context.data;
      }
    }
    actionBtn : string = "Guardar";

    form = this.fb.group({
      id:[null],
      description: [null, Validators.compose([Validators.required,Validators.maxLength(30)])],
      idTramite: [null, Validators.compose([Validators.required,Validators.maxLength(2)])]
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
    if( this.actionBtn == "Guardar"){
      this.service.register(this.form.value).subscribe(data =>{
        this.onLoadFailed('success', 'Gestión', 'Registrado Correctamente');
      },err =>{
        this.onLoadFailed('danger', 'Error', 'error');
      })
      this.windowRef.close();
    }else{
      let params = {
        description:this.form.value.description,
        idTramite:this.form.value.idTramite
      }
      this.service.update(this.data.id,params).subscribe(data =>{
        this.onLoadFailed('success', 'Gestión', 'Actualizado Correctamente');
      },err =>{
        this.onLoadFailed('danger', 'Error', 'error');
      })
      this.windowRef.close();
    }
  }


}
