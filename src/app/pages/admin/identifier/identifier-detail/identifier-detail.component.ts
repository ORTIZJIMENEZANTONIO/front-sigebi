import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { IdentifierService } from '../../../../@core/backend/common/services/identifier.service';
import { Identifier } from '../../../../@core/interfaces/auction/identifier.model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-identifier-detail',
  templateUrl: './identifier-detail.component.html',
  styleUrls: ['./identifier-detail.component.scss']
})
export class IdentifierDetailComponent extends BasePage {

  data: Identifier;

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: IdentifierService,    
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService) { 
      super();
      if (null != context.data){
        this.data = context.data;
      }
    }
    actionBtn : string = "Guardar";

    form = this.fb.group({

      code: ['', Validators.required],

      description: ['', Validators.required],

      keyview:['',[Validators.required, Validators.minLength(1), Validators.maxLength(1)]],

      noRegistration : ['',[Validators.required]]

    });
  
  get validate(){
    return this.form.controls;
  }
    
  ngOnInit(): void {

    if(this.data){
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.data);
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
      this.service.update(this.data.code, data).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }
  }

}
