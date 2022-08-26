import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { GoodSsubtypeService } from '../../../../@core/backend/common/services/good-ssubtype.service';
import { GoodSsubtype } from '../../../../@core/interfaces/auction/good-ssubtype.model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-good-ssubtype-detail',
  templateUrl: './good-ssubtype-detail.component.html',
  styleUrls: ['./good-ssubtype-detail.component.scss']
})
export class GoodSsubtypeDetailComponent extends BasePage {

  
  goodSsubtype: GoodSsubtype;

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: GoodSsubtypeService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService) { 
      super();
      if (null != context.goodSsubtype){
        this.goodSsubtype = context.goodSsubtype;
      }
    }
    actionBtn : string = "Guardar";

    form = this.fb.group({
    id:[''],

    description: ['', Validators.required],
    
    numType: ['', Validators.required],

    numSubType : ['', Validators.required],

    numRegister: ['', Validators.required]

    });
  
  get validate(){
    return this.form.controls;
  }
    
  ngOnInit(): void {
    
    if(this.goodSsubtype){
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.goodSsubtype)
     
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
      this.service.update(this.goodSsubtype.id,data).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }
  }
}
