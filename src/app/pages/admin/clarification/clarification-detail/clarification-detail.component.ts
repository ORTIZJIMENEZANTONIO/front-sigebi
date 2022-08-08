import { ChangeDetectorRef, Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { DomSanitizer } from '@angular/platform-browser';
import { BasePage } from '../../../../@core/shared/base-page';

import { ClarificationService } from '../../../../@core/backend/common/services/clarification.service';

@Component({
  selector: 'ngx-clarification-detail',
  templateUrl: './clarification-detail.component.html',
  styleUrls: ['./clarification-detail.component.scss']
})
export class ClarificationDetailComponent extends BasePage {

  deductive: any = {};

  constructor(
    @Inject(NB_WINDOW_CONTEXT) context,
    private fb: FormBuilder, 
    protected cd: ChangeDetectorRef, 
    protected router: Router, 
    private service: ClarificationService,
    public windowRef: NbWindowRef, 
    private dom: DomSanitizer,  
    private windowService: NbWindowService) { 
      super();
      if (null != context.deductive){
        this.deductive = context.deductive;
      }
    }
    actionBtn : string = "Guardar";

    formDeductive = this.fb.group({
      serviceType: [null, Validators.required],
      weightedDeduction: [null, Validators.required],
      startingRankPercentage: [null, Validators.required],
      finalRankPercentage: [null, Validators.required],
      contractNumber: [null, Validators.required],
      version: [null, Validators.compose([Validators.pattern("^([0-9]+)+([.][0-9]+)+([.][0-9]+)?$"),Validators.required])],
      status: [null, Validators.compose([Validators.required])],
    });
  
    get validateDeductive(){
      return this.formDeductive.controls;
    }
    
  ngOnInit(): void {
    
    if(this.deductive.id){
      this.actionBtn = "Actualizar";
      this.formDeductive.patchValue(this.deductive);
    }else{
      this.formDeductive.controls['status'].setValue(0);
    }
    
  }

  register(): void {
    const data = this.formDeductive.value;
    data.modificationDate = Date();
    if( this.actionBtn == "Guardar"){

      data.userCreation ="Rafael";
      data.userModification = "Antonio";
      data.creationDate = Date();

      this.service.register(data).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }else{
      this.service.update(this.deductive.id,data).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }
  }

}
