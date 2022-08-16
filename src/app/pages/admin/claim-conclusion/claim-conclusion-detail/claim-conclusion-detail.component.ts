import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { ClaimConclusionService } from '../../../../@core/backend/common/services/claim-conclusion.service';
import { ClaimConclusion } from '../../../../@core/interfaces/auction/claim-conclusion.model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-claim-conclusion-detail',
  templateUrl: './claim-conclusion-detail.component.html',
  styleUrls: ['./claim-conclusion-detail.component.scss']
})
export class ClaimConclusionDetailComponent extends BasePage {

  
  claimConclusion: ClaimConclusion;

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: ClaimConclusionService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService) { 
      super();
      if (null != context.claimConclusion){
        this.claimConclusion = context.claimConclusion;
      }
    }
    actionBtn : string = "Guardar";

    form = this.fb.group({
    id:[''],

    description: ['', Validators.required],
    
    flag: ['', Validators.required]

    });
  
  get validate(){
    return this.form.controls;
  }
    
  ngOnInit(): void {
    
    if(this.claimConclusion){
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.claimConclusion)
     
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
      this.service.update(this.claimConclusion.id,data).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }
  }
}
