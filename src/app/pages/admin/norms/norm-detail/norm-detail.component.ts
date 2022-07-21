import { ChangeDetectorRef, Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { DomSanitizer } from '@angular/platform-browser';
import { BaseApp } from '../../../../@core/shared/base-app';
import { STRING_PATTERN } from '../../../../@components/constants';
import { NormService } from '../../../../@core/backend/common/services/norm.service';

@Component({
  selector: 'ngx-norm-detail',
  templateUrl: './norm-detail.component.html',
  styleUrls: ['./norm-detail.component.scss']
})
export class NormDetailComponent extends BaseApp {
  norm: any = {};

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: NormService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService) { 
      super();
      if (null != context.norm){
        this.norm = context.norm;
      }
    }
    actionBtn : string = "Guardar";

    formNorm = this.fb.group({
      norm: [null, Validators.compose([Validators.pattern("[a-zA-Z]((\.|_|-)?[a-zA-ZáéíóúÁÉÍÓÚ\u0020]+){0,255}"), Validators.required])],
      article: [null, Validators.compose([Validators.required])],
      type: [null, Validators.compose([Validators.pattern("[0-9]{0,255}"),Validators.required])],
      characteristics: [null, Validators.compose([Validators.required])],
      merchandise: [null, Validators.compose([Validators.required])],
      fundament: [null, Validators.compose([Validators.required])],
      objective: [null, Validators.compose([Validators.required])],
      destination: [null, Validators.compose([Validators.pattern("[0-9]{0,255}"),Validators.required])],
      condition: [null, Validators.compose([Validators.pattern("[0-9]{0,255}"),Validators.required])],
      version: [null, Validators.compose([Validators.pattern("^([0-9]+)+([.][0-9]+)+([.][0-9]+)?$"),Validators.required])],
      status: [null, Validators.compose([ Validators.maxLength(20), Validators.required])],
    });
  
    get validateNorm(){
      return this.formNorm.controls;
    }
    
  ngOnInit(): void {
    
    if(this.norm.id){
      this.actionBtn = "Actualizar";
      this.formNorm.patchValue(this.norm)
    }
    
  }

  register(): void {
    const data = this.formNorm.value;
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
      this.service.update(this.norm.id,data).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }
  }
}
