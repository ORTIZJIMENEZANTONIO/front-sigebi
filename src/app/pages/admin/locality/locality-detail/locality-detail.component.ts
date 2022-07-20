import { ChangeDetectorRef, Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { DomSanitizer } from '@angular/platform-browser';
import { BaseApp } from '../../../../@core/shared/base-app';
import { LocalityService } from '../../../../@core/backend/common/services/locality.service';
import { MunicipalityService } from '../../../../@core/backend/common/services/municipality.service';


@Component({
  selector: 'ngx-locality-detail',
  templateUrl: './locality-detail.component.html',
  styleUrls: ['./locality-detail.component.scss']
})
export class LocalityDetailComponent extends BaseApp {
  locality: any = {};
  municipalitys = Array();

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: LocalityService, private serviceMunicipality: MunicipalityService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService) { 
      super();
      if (null != context.locality){
        this.locality = context.locality;
      }
    }
    actionBtn : string = "Guardar";

    formLocality = this.fb.group({
      key: [null, Validators.compose([Validators.maxLength(30),Validators.required])],
      entityKey: [null, Validators.compose([Validators.maxLength(30),Validators.required])],
      municipalityKey: [null, Validators.compose([Validators.maxLength(60),Validators.required])],
      localityName: [null, Validators.compose([Validators.maxLength(60),Validators.required])],
      ambitKey: [null, Validators.compose([Validators.maxLength(60),Validators.required])],
      version: [null, Validators.compose([Validators.pattern("^([0-9]+)+([.][0-9]+)+([.][0-9]+)?$"),Validators.required])],
    });
  
    get validateLocality(){
      return this.formLocality.controls;
    }
    
  ngOnInit(): void {
    this.serviceMunicipality.listAll('locality-sae').subscribe(data =>{
      this.municipalitys = data['data'];
    },err =>{
      console.log(err);
    })

    if(this.locality.key){
      this.actionBtn = "Actualizar";
      this.formLocality.patchValue(this.locality)
      this.formLocality.controls['key'].disable();
    }
    
  }

  register(): void {
    
    const data = this.formLocality.value;
    data.modificationDate = Date();
    if( this.actionBtn == "Guardar"){

      data.userCreation ="Rafael";
      data.userModification = "Antonio";
      data.creationDate = Date();

      this.service.register(data).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }else{
      this.service.update(this.locality.key,data).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }
  }
}
