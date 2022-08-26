import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { StatusCodeService } from '../../../../@core/backend/common/services/status-code.service';
import { StatusCode } from '../../../../@core/interfaces/auction/status-code.model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-status-code-detail',
  templateUrl: './status-code-detail.component.html',
  styleUrls: ['./status-code-detail.component.scss']
})
export class StatusCodeDetailComponent extends BasePage {

  
  statusCode: StatusCode;

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: StatusCodeService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService) { 
      super();
      if (null != context.statusCode){
        this.statusCode = context.statusCode;
      }
    }
    actionBtn : string = "Guardar";

    form = this.fb.group({
    id:[''],

    descCode: ['', Validators.required],
    
    order: ['', Validators.required]

    });
  
  get validate(){
    return this.form.controls;
  }
    
  ngOnInit(): void {
    
    if(this.statusCode){
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.statusCode)
     
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
      this.service.update(this.statusCode.id,data).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }
  }
}
