import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { BasePage } from '../../../../@core/shared/base-page';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService, NbToastrService } from '@nebular/theme';
import { OriginService  } from '../../../../@core/backend/common/services/origin.service';
import { SweetalertService } from '../../../../shared/sweetalert.service';
import { SweetAlertConstants, SweetalertModel } from '../../../../@core/interfaces/auction/sweetalert-model';
import { BasePage } from '../../../../@core/shared/base-page';
=======
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';

import { OriginInterface } from '../../../../@core/interfaces/auction/origin.model';
import { OriginService  } from '../../../../@core/backend/common/services/origin.service';
>>>>>>> 3fee159132d2c12e33e949fae17d361950d48746

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
<<<<<<< HEAD
    public windowRef: NbWindowRef,
    @Inject(NB_WINDOW_CONTEXT) context,
    private dom: DomSanitizer,
    private windowService: NbWindowService,
    public toA: NbToastrService,
    public sweetalertService: SweetalertService) {
    super(toA);
    if (null != context.data) {
      this.data = context.data;
    }
  }
  actionBtn: string = "Guardar";
=======
    public windowRef: NbWindowRef, 
    @Inject(NB_WINDOW_CONTEXT) context, 
    private dom: DomSanitizer,  
    ) { 
      super();
      if (null != context.origin){
        this.origin = context.origin;
      } 
>>>>>>> 3fee159132d2c12e33e949fae17d361950d48746
      
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

<<<<<<< HEAD
  public register(): void {
    const data = this.form.getRawValue();
    this.actionBtn == "Guardar" ? this.createRegister(data) : this.updateRegister(data);
  }
  private createRegister(data): void {
    this.service.register(data).subscribe(
      data => {
        this.onLoadFailed('success', 'Despacho', 'Registrado Correctamente');
      }, err => {
        let error = '';
        if (err.status === 0) {
          error = SweetAlertConstants.noConexion;
        } else {
          error = err.message;
        }
        this.onLoadFailed('danger', 'Error', error);
      }, () => {
        this.windowRef.close();
      });
  }
  private updateRegister(data): void {
    this.service.update(this.data.id, data).subscribe(
      data => {
        this.onLoadFailed('success', 'Despacho', 'Actualizado Correctamente');
      }, err => {
        let error = '';
        if (err.status === 0) {
          error = SweetAlertConstants.noConexion;
        } else {
          error = err.message;
        }
        this.onLoadFailed('danger', 'Error', error);
      }, () => {
        this.windowRef.close();
      });
  }
}
=======
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
>>>>>>> 3fee159132d2c12e33e949fae17d361950d48746
