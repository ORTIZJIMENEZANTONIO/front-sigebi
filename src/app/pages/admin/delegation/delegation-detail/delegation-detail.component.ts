import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { DelegationService } from '../../../../@core/backend/common/services/delegation.service';
import { Delegation } from '../../../../@core/interfaces/auction/Delegation.model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-delegation-detail',
  templateUrl: './delegation-detail.component.html',
  styleUrls: ['./delegation-detail.component.scss']
})
export class DelegationDetailComponent extends BasePage {

  
  delegation: Delegation;

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: DelegationService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService) { 
      super();
      if (null != context.delegation){
        this.delegation = context.delegation;
      }
    }
    actionBtn : string = "Guardar";

    formDelegation = this.fb.group({
      id:[''],
      description: ['', Validators.required],

      zoneContractCVE:['',Validators.required],

      diffHours : ['',[Validators.required]],
  
      phaseEdo: ['',[Validators.required]],
  
      zoneVigilanceCVE : ['',[Validators.required]],
  
      numRegister: ['',Validators.required],

    });
  
  get validateDelegation(){
    return this.formDelegation.controls;
  }
    
  ngOnInit(): void {
    
    if(this.delegation){
      this.actionBtn = "Actualizar";
      this.formDelegation.patchValue(this.delegation)
     
    }
  }

  register(): void {
    const data = this.formDelegation.value;
    if( this.actionBtn == "Guardar"){
      this.service.register(data).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }else{
      this.service.update(this.delegation.id,data).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }
  }
}
