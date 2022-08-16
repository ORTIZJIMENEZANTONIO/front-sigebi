import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { GoodSssubtypeService } from '../../../../@core/backend/common/services/good-sssubtype.service';
import { GoodSssubtype } from '../../../../@core/interfaces/auction/good-sssubtype.model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-good-ssubtype-detail',
  templateUrl: './good-sssubtype-detail.component.html',
  styleUrls: ['./good-sssubtype-detail.component.scss']
})
export class GoodSssubtypeDetailComponent extends BasePage {

  
  goodSssubtype: GoodSssubtype;

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: GoodSssubtypeService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService) { 
      super();
      if (null != context.goodSsubtype){
        this.goodSssubtype = context.goodSssubtype;
      }
    }
    actionBtn : string = "Guardar";

    form = this.fb.group({
    id:[''],

    description: ['', Validators.required],

    numSubType : ['', Validators.required],

    numSsubType : ['', Validators.required],

    numType: ['', Validators.required],

    numRegister: ['', Validators.required],

    numClasifAlterna: ['', Validators.required],

    numClasifGoods: ['', Validators.required]

    });
  
  get validate(){
    return this.form.controls;
  }
    
  ngOnInit(): void {
    
    if(this.goodSssubtype){
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.goodSssubtype)
     
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
      this.service.update(this.goodSssubtype.id,data).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }
  }
}
