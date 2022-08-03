import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NbWindowService, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { GranteesService } from '../../../../@core/backend/common/services/grantees.service';
import { BaseApp } from '../../../../@core/shared/base-app';

@Component({
  selector: 'ngx-grantees-deail',
  templateUrl: './grantees-deail.component.html',
  styleUrls: ['./grantees-deail.component.scss']
})
export class GranteesDeailComponent extends BaseApp {

  Form: FormGroup;
  data: any = {};

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: GranteesService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService) { 
      super();
      if (null != context.data){
        this.data = context.data;
      }
    }
    actionBtn : string = "Guardar";

    form = this.fb.group({
      id:[null],
      description: [null, Validators.compose([Validators.pattern(""), Validators.required,Validators.maxLength(100)])],
      puesto: [null, Validators.compose([Validators.pattern(""),Validators.required,Validators.maxLength(100)])],
      type: [null, Validators.compose([Validators.pattern(""),Validators.required,Validators.maxLength(10)])],
      razonSocial: [null, Validators.compose([Validators.pattern(""),Validators.required,Validators.maxLength(255)])],
      street: [null, Validators.compose([Validators.pattern(""),Validators.required,Validators.maxLength(255)])],
      noInside: [null, Validators.compose([Validators.pattern(""),Validators.required,Validators.maxLength(50)])],
      noExterior: [null, Validators.compose([Validators.pattern(""),Validators.required,Validators.maxLength(50)])],
      col: [null, Validators.compose([Validators.pattern(""),Validators.required,Validators.maxLength(100)])],
      nommun: [null, Validators.compose([Validators.pattern(""),Validators.required,Validators.maxLength(255)])],
      nomedo: [null, Validators.compose([Validators.pattern(""),Validators.required,Validators.maxLength(100)])],
      cp: [null, Validators.compose([Validators.pattern(""),Validators.required,Validators.maxLength(10)])],
      usrStatus: [null, Validators.compose([Validators.pattern(""),Validators.required,Validators.maxLength(5)])],
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
        this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }else{
      this.service.update(this.data.id,this.form.value).subscribe(data =>{
       this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }
  }

}
