import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { GoodSubtypeService } from '../../../../@core/backend/common/services/good-subtype.service';
import { GoodSubtype } from '../../../../@core/interfaces/auction/good-subtype.model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-good-subtype-detail',
  templateUrl: './good-subtype-detail.component.html',
  styleUrls: ['./good-subtype-detail.component.scss']
})
export class GoodSubtypeDetailComponent extends BasePage {

  
  goodSubtype: GoodSubtype;

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: GoodSubtypeService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService) { 
      super();
      if (null != context.goodSubtype){
        this.goodSubtype = context.goodSubtype;
      }
    }
    actionBtn : string = "Guardar";

    form = this.fb.group({
    id:[''],

    description: ['', Validators.required],
    
    numType: ['', Validators.required],

    numRegister: ['', Validators.required]

    });
  
  get validate(){
    return this.form.controls;
  }
    
  ngOnInit(): void {
    
    if(this.goodSubtype){
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.goodSubtype)
     
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
      this.service.update(this.goodSubtype.id,data).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }
  }
}
