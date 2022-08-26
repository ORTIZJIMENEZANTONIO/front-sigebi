import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { GoodTypeService } from '../../../../@core/backend/common/services/good-type.service';
import { GoodType } from '../../../../@core/interfaces/auction/good-type.model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-good-type-detail',
  templateUrl: './good-type-detail.component.html',
  styleUrls: ['./good-type-detail.component.scss']
})
export class GoodTypeDetailComponent extends BasePage {

  
  goodType: GoodType;

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: GoodTypeService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService) { 
      super();
      if (null != context.goodType){
        this.goodType = context.goodType;
      }
    }
    actionBtn : string = "Guardar";

    form = this.fb.group({
    id:[''],

    description: ['', Validators.required],
    
    maxInsTime: ['', Validators.required],

    maxFracTime: ['', Validators.required],
    
    maxExteTime: ['', Validators.required],

    maxStateTime: ['', Validators.required],

    maxLimitTime1: ['', Validators.required],

    maxLimitTime2: ['', Validators.required],

    maxLimitTime3: ['', Validators.required],

    numRegister: ['', Validators.required]

    });
  
  get validate(){
    return this.form.controls;
  }
    
  ngOnInit(): void {
    
    if(this.goodType){
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.goodType)
     
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
      this.service.update(this.goodType.id,data).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }
  }
}
