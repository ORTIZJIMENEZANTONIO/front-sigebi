import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { BatteryService } from '../../../../@core/backend/common/services/battery.service';
import { BatteryInterface } from '../../../../@core/interfaces/auction/battery.model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-battery-detail',
  templateUrl: './battery-detail.component.html',
  styleUrls: ['./battery-detail.component.scss']
})
export class BatteryDetailComponent extends BasePage {

  
  batteries: BatteryInterface;

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: BatteryService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService) { 
      super();
      if (null != context.batteries){
        this.batteries = context.batteries;
      }
    }
    actionBtn : string = "Guardar";

    form = this.fb.group({
    id:[''],

    description: [null, Validators.compose([Validators.required])],
    
    numType: [null, Validators.compose([Validators.required])],

    numRegister: [null, Validators.compose([Validators.required])],

    status: [null, Validators.compose([Validators.required])]

    });
  
  get validate(){
    return this.form.controls;
  }
    
  ngOnInit(): void {
    
    if(this.batteries){
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.batteries)
     
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
      this.service.update(this.batteries.idBattery,data).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }
  }
}
