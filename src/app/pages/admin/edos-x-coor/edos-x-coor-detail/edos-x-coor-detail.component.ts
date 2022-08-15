import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NbWindowService, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { EdosxcoorService } from '../../../../@core/backend/common/services/edos-x-coor.service';
import { BaseApp } from '../../../../@core/shared/base-app';

@Component({
  selector: 'ngx-edos-x-coor-detail',
  templateUrl: './edos-x-coor-detail.component.html',
  styleUrls: ['./edos-x-coor-detail.component.scss']
})
export class EdosXCoorDetailComponent extends BaseApp {
  Form: FormGroup;
  data: any = {};

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: EdosxcoorService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService) { 
      super();
      if (null != context.data){
        this.data = context.data;
      }
    }
    actionBtn : string = "Guardar";

    form = this.fb.group({
      id:[null],
      description: [null, Validators.compose([Validators.pattern(""), Validators.required,Validators.maxLength(80)])],
      noState: [null, Validators.compose([Validators.pattern(""),Validators.required,Validators.maxLength(60)])],
      state: [null, Validators.compose([Validators.pattern(""),Validators.required,Validators.maxLength(10)])],
      stage: [null, Validators.compose([Validators.pattern(""),Validators.required,Validators.maxLength(10)])]
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
