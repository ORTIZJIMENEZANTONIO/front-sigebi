import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NbWindowService, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { DoccompensationsatService } from '../../../../@core/backend/common/services/doccompesationsat.service';
import { BaseApp } from '../../../../@core/shared/base-app';

@Component({
  selector: 'ngx-doccompensation-sat-detail',
  templateUrl: './doccompensation-sat-detail.component.html',
  styleUrls: ['./doccompensation-sat-detail.component.scss']
})
export class DoccompensationSatDetailComponent extends BaseApp {
  Form: FormGroup;
  data: any = {};

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: DoccompensationsatService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService) { 
      super();
      if (null != context.data){
        this.data = context.data;
      }
    }
    actionBtn : string = "Guardar";

    form = this.fb.group({
      id:[null],
      idcat: [null, Validators.compose([Validators.required])]  ,
      typeDocSat: [null, Validators.compose([Validators.required])],
      addressee: [null, Validators.compose([Validators.required])], 
      subjectCode: [null, Validators.compose([Validators.required])],  
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
