import { ChangeDetectorRef, Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { DomSanitizer } from '@angular/platform-browser';
import { BaseApp } from '../../../../@core/shared/base-app';
import { STRING_PATTERN } from '../../../../@components/constants';
import { NonDeliveryReasonsService } from '../../../../@core/backend/common/services/nonDeliveryReasons.service';


@Component({
  selector: 'ngx-non-delivery-reasons-detail',
  templateUrl: './non-delivery-reasons-detail.component.html',
  styleUrls: ['./non-delivery-reasons-detail.component.scss']
})
export class NonDeliveryReasonsDetailComponent extends BaseApp {

  reason: any = {};

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: NonDeliveryReasonsService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService) { 
      super();
      if (null != context.reason){
        this.reason = context.reason;
      }
    }
    actionBtn : string = "Guardar";

    formReason = this.fb.group({
      reasonType: [null, Validators.compose([ Validators.pattern("^[a-zA-Z]{1,50}"), Validators.required])],
      eventType: [null, Validators.compose([Validators.pattern(""), Validators.required])],
      reason: [null, Validators.compose([Validators.pattern(""), Validators.required])],
      version: [null, Validators.compose([Validators.pattern("^([0-9]+)+([.][0-9]+)+([.][0-9]+)?$"),Validators.required])],
      status: [null, Validators.compose([Validators.required])],
    });
  
    get validateReason(){
      return this.formReason.controls;
    }
    
  ngOnInit(): void {
    if(this.reason.id){
      this.actionBtn = "Actualizar";
      this.formReason.patchValue(this.reason)
    }else{
      this.formReason.controls['status'].setValue(0);
    }
    
  }

  register(): void {
    const data = this.formReason.value;
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
      this.service.update(this.reason.id,data).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }
  }
}
