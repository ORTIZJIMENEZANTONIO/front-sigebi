import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NbWindowService, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { EstRpuveService } from '../../../../@core/backend/common/services/est-repuve.service';
import { LabelOkeyService } from '../../../../@core/backend/common/services/label-okey.service';
import { ManagementService } from '../../../../@core/backend/common/services/management.service';
import { StageService } from '../../../../@core/backend/common/services/stage.service';
import { BaseApp } from '../../../../@core/shared/base-app';

@Component({
  selector: 'ngx-est-repuve-detail',
  templateUrl: './est-repuve-detail.component.html',
  styleUrls: ['./est-repuve-detail.component.scss']
})
export class EstRepuveDetailComponent extends BaseApp {


 
  Form: FormGroup;
  data: any = {};

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: EstRpuveService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService) { 
      super();
      console.log(context);
      if (null != context.data){
        this.data = context.data;
      }
    }
    actionBtn : string = "Guardar";

    form = this.fb.group({
      cve:[null,Validators.compose([Validators.required])],
      description: [null, Validators.compose([Validators.required])],
      procedure: [null, Validators.compose([Validators.required])], 
     });
  
    get validateOpinion(){
      return this.form.controls;
    }
    ngOnInit(): void {
      if(this.data.cve != null){
        this.actionBtn = "Actualizar";
        this.form.patchValue(this.data);
        this.form.controls['cve'].disable();
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
      this.service.update(this.data.cve,this.form.value).subscribe(data =>{
       this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }
  }
}
