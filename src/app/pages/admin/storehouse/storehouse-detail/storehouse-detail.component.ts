import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { BasePage } from '../../../../@core/shared/base-page';

import { StorehouseService } from '../../../../@core/backend/common/services/storehouse.service';
import { StorehouseInterface } from '../../../../@core/interfaces/auction/storehouse.model';

@Component({
  selector: 'ngx-storehouse-detail',
  templateUrl: './storehouse-detail.component.html',
  styleUrls: ['./storehouse-detail.component.scss']
})
export class StorehouseDetailComponent extends BasePage {

  storehouse: StorehouseInterface;

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: StorehouseService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService) { 
      super();
      if (null != context.delegation){
        this.storehouse = context.delegation;
      }
    }
    actionBtn : string = "Guardar";

    form = this.fb.group({

      idStorehouse:[''],
      manager: ['',Validators.required],
      descripcion: ['', Validators.required],
      municipality: ['',[Validators.required]],
      locality: ['',[Validators.required]],
      ubication: ['',[Validators.required]],
      idEntity: ['',Validators.required],

    });
  
  get validateDelegation(){
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
      this.service.update(this.storehouse.idStorehouse, data).subscribe(data => {
        this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }
  }

}
