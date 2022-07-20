import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NbWindowService, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { DictamenService } from '../../../../@core/backend/common/services/dictamen.service';
import { BaseApp } from '../../../../@core/shared/base-app';

@Component({
  selector: 'ngx-dictament-detail',
  templateUrl: './dictament-detail.component.html',
  styleUrls: ['./dictament-detail.component.scss']
})
export class DictamentDetailComponent  extends BaseApp {

 
  opinionForm: FormGroup;
  opinion: any = {};

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: DictamenService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService) { 
      super();
      if (null != context.opinion){
        this.opinion = context.opinion;
      }
    }
    actionBtn : string = "Guardar";

    formOpinion = this.fb.group({
      id:[null],
      description: [null, Validators.compose([Validators.pattern(""), Validators.required])],
      noRegistration: [null, Validators.compose([Validators.pattern("[0-9]"),Validators.required])],
      dict_ofi: [null, Validators.compose([Validators.pattern("[a-zA-Z]((\.|_|-)?[a-zA-ZáéíóúÁÉÍÓÚ\u0020]+){0,255}"), Validators.required])],
      areaProcess: [null, Validators.compose([Validators.pattern("[a-zA-Z]((\.|_|-)?[a-zA-ZáéíóúÁÉÍÓÚ\u0020]+){0,255}"), Validators.required])],
      
    });
  
    get validateOpinion(){
      return this.formOpinion.controls;
    }
    ngOnInit(): void {
    console.log(this.opinion);
      if(this.opinion.id != null){
        this.actionBtn = "Actualizar";
        // this.formOpinion.controls['description'].setValue(this.opinion.description);
        // this.formOpinion.controls['noRegistration'].setValue(this.opinion.noRegistration);
        // this.formOpinion.controls['dict_ofi'].setValue(this.opinion.dict_ofi);
        // this.formOpinion.controls['areaProcess'].setValue(this.opinion.areaProcess);
        this.formOpinion.patchValue(this.opinion);
      }
      
    }
  


  register(): void {
    if( this.actionBtn == "Guardar"){
      this.service.register(this.formOpinion.value).subscribe(data =>{
        console.log(data)
        this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }else{
      this.service.update(this.opinion.id,this.formOpinion.value).subscribe(data =>{
       this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }
  }
}
