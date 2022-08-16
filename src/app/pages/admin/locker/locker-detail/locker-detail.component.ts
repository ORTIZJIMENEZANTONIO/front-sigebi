import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { LockerService } from '../../../../@core/backend/common/services/locker.service';
import { Locker } from '../../../../@core/interfaces/auction/locker.model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-locker-detail',
  templateUrl: './locker-detail.component.html',
  styleUrls: ['./locker-detail.component.scss']
})
export class LockerDetailComponent extends BasePage {

  
  locker: Locker;

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: LockerService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService) { 
      super();
      if (null != context.locker){
        this.locker = context.locker;
      }
    }
    actionBtn : string = "Guardar";

    formLocker = this.fb.group({
    id:[''],

    numBattery: ['', Validators.required],

    numShelf: ['', Validators.required],

    numLocker: ['', Validators.required],

    numRegister: ['', Validators.required],

    description: ['', Validators.required],
    
    status: ['', Validators.required],

    });
  
  get validateLocker(){
    return this.formLocker.controls;
  }
    
  ngOnInit(): void {
    
    if(this.locker){
      this.actionBtn = "Actualizar";
      this.formLocker.patchValue(this.locker)
     
    }
  }

  register(): void {
    const data = this.formLocker.value;
    if( this.actionBtn == "Guardar"){
      this.service.register(data).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }else{
      this.service.update(this.locker.id,data).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }
  }
}
