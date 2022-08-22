import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NbWindowService, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { DoccompensationsatxmlService } from '../../../../@core/backend/common/services/doccompensationsatxml.service';
import { LabelOkeyService } from '../../../../@core/backend/common/services/label-okey.service';
import { ManagementService } from '../../../../@core/backend/common/services/management.service';
import { StageService } from '../../../../@core/backend/common/services/stage.service';
import { BaseApp } from '../../../../@core/shared/base-app';
@Component({
  selector: 'ngx-doccompensation-sat-xml-detail',
  templateUrl: './doccompensation-sat-xml-detail.component.html',
  styleUrls: ['./doccompensation-sat-xml-detail.component.scss']
})
export class DoccompensationSatXmlDetailComponent extends BaseApp {


 
  Form: FormGroup;
  data: any = {};

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: DoccompensationsatxmlService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService) { 
      super();
      if (null != context.data){
        this.data = context.data;
      }
    }
    actionBtn : string = "Guardar";

    form = this.fb.group({
      id:[null],
      idOficioSat: [null, Validators.compose([Validators.required])]  ,
      typeDocSatXml: [null, Validators.compose([Validators.required])]  , 
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
