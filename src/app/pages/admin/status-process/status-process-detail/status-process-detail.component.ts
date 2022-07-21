import { ChangeDetectorRef, Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { DomSanitizer } from '@angular/platform-browser';
import { BaseApp } from '../../../../@core/shared/base-app';
import { STRING_PATTERN } from '../../../../@components/constants';
import { StatusProcessService } from '../../../../@core/backend/common/services/statusProcess.service';

@Component({
  selector: 'ngx-status-process-detail',
  templateUrl: './status-process-detail.component.html',
  styleUrls: ['./status-process-detail.component.scss']
})
export class StatusProcessDetailComponent extends BaseApp {
  statusProcess: any = {};

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: StatusProcessService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService) { 
      super();
      if (null != context.statusProcess){
        this.statusProcess = context.statusProcess;
      }
    }
    actionBtn : string = "Guardar";

    formStatusProcess = this.fb.group({
      status: [null, Validators.compose([Validators.pattern("[a-zA-Z]((\.|_|-)?[a-zA-ZáéíóúÁÉÍÓÚ\u0020]+){0,255}"), Validators.required])],
      process: [null, Validators.compose([Validators.pattern("[a-zA-Z]((\.|_|-)?[a-zA-ZáéíóúÁÉÍÓÚ\u0020]+){0,255}"), Validators.required])],
      description: [null, Validators.compose([Validators.required])],
    });
  
    get validateStatusProcess(){
      return this.formStatusProcess.controls;
    }
    
  ngOnInit(): void {
    
    if(this.statusProcess.status){
      this.actionBtn = "Actualizar";
      this.formStatusProcess.patchValue(this.statusProcess);
      this.formStatusProcess.controls['status'].disable();
    }
    
  }

  register(): void {
    const data = this.formStatusProcess.value;
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
      this.service.update(this.statusProcess.status,data).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }
  }
}