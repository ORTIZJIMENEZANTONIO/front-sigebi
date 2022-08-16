import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { GoodSituationService } from '../../../../@core/backend/common/services/good-situation.service';
import { GoodSituation } from '../../../../@core/interfaces/auction/good-situation.model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-good-situation-detail',
  templateUrl: './good-situation-detail.component.html',
  styleUrls: ['./good-situation-detail.component.scss']
})
export class GoodSituationDetailComponent extends BasePage {

  
  goodSituation: GoodSituation;

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: GoodSituationService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService) { 
      super();
      if (null != context.goodSituation){
        this.goodSituation = context.goodSituation;
      }
    }
    actionBtn : string = "Guardar";

    form = this.fb.group({
    id:[''],

    descSituation: ['', Validators.required],
    
    status: ['', Validators.required]

    });
  
  get validate(){
    return this.form.controls;
  }
    
  ngOnInit(): void {
    
    if(this.goodSituation){
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.goodSituation)
     
    }
  }

  register(): void {
    const data = this.form.value;
    if( this.actionBtn == "Guardar"){
      this.service.register(data).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }else{
      this.service.update(this.goodSituation.id,data).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }
  }
}
