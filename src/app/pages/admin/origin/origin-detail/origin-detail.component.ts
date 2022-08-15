import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { BasePage } from '../../../../@core/shared/base-page';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';

import { OriginInterface } from '../../../../@core/interfaces/auction/origin.model';
import { OriginService  } from '../../../../@core/backend/common/services/origin.service';

@Component({
  selector: 'ngx-origin-detail',
  templateUrl: './origin-detail.component.html',
  styleUrls: ['./origin-detail.component.scss']
})
export class OriginDetailComponent extends BasePage {

  form: FormGroup;
  origin: OriginInterface;

  constructor(
    private fb: FormBuilder, 
    protected cd: ChangeDetectorRef, 
    protected router: Router, 
    private service: OriginService,
    public windowRef: NbWindowRef, 
    @Inject(NB_WINDOW_CONTEXT) context, 
    private dom: DomSanitizer,  
    ) { 
      super();
      if (null != context.origin){
        this.origin = context.origin;
      } 
      
      this.form = this.fb.group({
      id: [null],
      idTransferer: [null, Validators.compose([Validators.pattern("[0-9]{1,255}"),Validators.required])],
      keyTransferer: [null, Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9@.-_-]{1,255}")])],
      description: [null, Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9@.-_-]{1,255}")])],
      type: [null, Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9@.-_-]{1,255}")])],
      address: [null, Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9@.-_-]{1,255}")])],
      city: [null, Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9@.-_-]{1,255}")])],
      idCity: [null, Validators.compose([Validators.pattern("[0-9]{1,255}"),Validators.required])],
      keyEntityFederative: [null, Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9@.-_-]{1,15}")])],
    });


    }
       actionBtn : string = "Guardar";


  
    get validate(){
      return this.form.controls;
    }
    
  ngOnInit(): void {
    this.origin
      ? this.actionBtn = "Actualizar"
      :  this.form.patchValue(this.origin)

  }

  register(): void {
    const data = this.form.value;
    data.modificationDate = new Date();
    if( this.actionBtn == "Guardar"){

/*       data.userCreation ="Rafael";
      data.userModification = "Antonio";
      data.creationDate = new Date(); */

      this.service.register(data).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }else{
      this.service.update(this.origin.id,data).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }
  }

}
