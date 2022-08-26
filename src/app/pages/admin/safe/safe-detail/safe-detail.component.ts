import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { BasePage } from '../../../../@core/shared/base-page';

import { SafeInterface } from '../../../../@core/interfaces/auction/safe.model';
import { SafeService } from '../../../../@core/backend/common/services/safe.service';

@Component({
  selector: 'ngx-safe-detail',
  templateUrl: './safe-detail.component.html',
  styleUrls: ['./safe-detail.component.scss']
})
export class SafeDetailComponent extends BasePage {

  storehouse: SafeInterface;

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: SafeService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService) { 
      super();
      if (null != context.delegation){
        this.storehouse = context.delegation;
      }
    }
    actionBtn : string = "Guardar";

    form = this.fb.group({

      idSafe:[''],
      manager: ['',Validators.required],
      descripcion: ['', Validators.required],
      ubication: ['',[Validators.required]],
      registerNumber: ['',[Validators.required]],
      municipalityCode: ['',[Validators.required]],
      localityCode: ['',Validators.required],
      stateCode: ['',[Validators.required]],
      cityCode: ['',Validators.required],

    });
  
  get validateSafe(){
    return this.form.controls;
  }
    
  ngOnInit(): void {
    
    if(this.storehouse){
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.storehouse)
     
    }
  }

  register(): void {
    const data = this.form.value;
    if( this.actionBtn == "Guardar"){
      this.service.register(data).subscribe(data => {
        this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }else{
      this.service.update(this.storehouse.idSafe, data).subscribe(data => {
        this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }
  }

}
