import { ChangeDetectorRef, Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { DomSanitizer } from '@angular/platform-browser';
import { BaseApp } from '../../../../@core/shared/base-app';
import { GenericService } from '../../../../@core/backend/common/services/generic.service';

@Component({
  selector: 'ngx-generic-datail',
  templateUrl: './generic-datail.component.html',
  styleUrls: ['./generic-datail.component.scss']
})
export class GenericDatailComponent extends BaseApp {
  generic: any = {};

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: GenericService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService) { 
      super();
      if (null != context.generic){
        this.generic = context.generic;
      }
    }
    actionBtn : string = "Guardar";

    formGeneric = this.fb.group({
      name: [null, Validators.compose([Validators.pattern("[a-zA-Z]((\.|_|-)?[a-zA-ZáéíóúÁÉÍÓÚ\u0020]+){0,255}"), Validators.required])],
      keyId: [null, Validators.compose([Validators.pattern("[0-9]{0,255}"),Validators.required])],
      description: [null, Validators.compose([Validators.required])],
      version: [null, Validators.compose([Validators.pattern("^([0-9]+)+([.][0-9]+)+([.][0-9]+)?$"),Validators.required])],
      active: [null, Validators.compose([Validators.required])],
      editable: [null, Validators.compose([Validators.required])],
    });
  
    get validateGeneric(){
      return this.formGeneric.controls;
    }
    
  ngOnInit(): void {
    if(this.generic.keyId){
      this.actionBtn = "Actualizar";
      this.formGeneric.patchValue(this.generic)
    }
    
  }

  register(): void {
    const data = this.formGeneric.value;
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
      this.service.update(this.generic.name,data).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }
  }
}