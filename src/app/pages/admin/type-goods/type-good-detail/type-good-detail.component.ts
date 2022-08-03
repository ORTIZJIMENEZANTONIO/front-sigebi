import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NbWindowService, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { TypeGoodstService } from '../../../../@core/backend/common/services/typeGoods.service';
import { BaseApp } from '../../../../@core/shared/base-app';

@Component({
  selector: 'ngx-type-good-detail',
  templateUrl: './type-good-detail.component.html',
  styleUrls: ['./type-good-detail.component.scss']
})
export class TypeGoodDetailComponent extends BaseApp {

  Form: FormGroup;
  data: any = {};

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: TypeGoodstService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService) { 
      super();
      if (null != context.data){
        this.data = context.data;
      }
    }
    actionBtn : string = "Guardar";

    form = this.fb.group({
      id:[null],
      name: [null, Validators.compose([Validators.pattern(""), Validators.required])],
      version: [null, Validators.compose([Validators.pattern("[0-9]"),Validators.required])],
    });
  
    get validateOpinion(){
      return this.form.controls;
    }
    ngOnInit(): void {
      if(this.data.id != null){
        this.actionBtn = "Actualizar";
        // this.formOpinion.controls['description'].setValue(this.opinion.description);
        // this.formOpinion.controls['noRegistration'].setValue(this.opinion.noRegistration);
        // this.formOpinion.controls['dict_ofi'].setValue(this.opinion.dict_ofi);
        // this.formOpinion.controls['areaProcess'].setValue(this.opinion.areaProcess);
        this.form.patchValue(this.data);
      }
      
    }
  


  register(): void {
    let params = {
      userCreation: 'Paul',
      creationDate:new Date(),
      userModificatio:'Paul',
      modificatioDate:new Date(),
      name: this.form.value.name,
      version: this.form.value.version,
      //cve: this.form.value.cve,

    }
    if( this.actionBtn == "Guardar"){
      this.service.register(params).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }else{
      this.service.update(this.data.id,params).subscribe(data =>{
        console.log(data);
       this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }
  }

}
