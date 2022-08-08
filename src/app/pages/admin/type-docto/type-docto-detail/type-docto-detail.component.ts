import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NbWindowService, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { TypeDoctoService } from '../../../../@core/backend/common/services/typeDocto.service';
import { TypeGoodstService } from '../../../../@core/backend/common/services/typeGoods.service';
import { BaseApp } from '../../../../@core/shared/base-app';

@Component({
  selector: 'ngx-type-docto-detail',
  templateUrl: './type-docto-detail.component.html',
  styleUrls: ['./type-docto-detail.component.scss']
})
export class TypeDoctoDetailComponent extends BaseApp {

  Form: FormGroup;
  data: any = {};

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: TypeDoctoService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService) { 
      super();
      if (null != context.data){
        this.data = context.data;
      }
    }
    actionBtn : string = "Guardar";

    form = this.fb.group({
      id:[null,Validators.compose([Validators.pattern(""), Validators.required])],
      description: [null, Validators.compose([Validators.pattern(""), Validators.required])],
      version: [null, Validators.compose([Validators.pattern(""),Validators.required])],
      estatus: [null, Validators.compose([Validators.pattern(""),Validators.required])]
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
      let params = {
        userCreation: 'Paul',
        creationDate:new Date(),
        userModificatio:'Paul',
        modificatioDate:new Date(),
        description: this.form.value.description,
        version: this.form.value.version,
        estatus:this.form.value.estatus
      }
      this.service.register(params).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }else{
      let params = {
        userModificatio:'Paul',
        modificatioDate:new Date(),
        description: this.form.value.description,
        version: this.form.value.version,
        estatus:this.form.value.estatus
      }
      this.service.update(this.data.id,params).subscribe(data =>{
       this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }
  }
}
