import { ChangeDetectorRef, Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { DomSanitizer } from '@angular/platform-browser';
import { BaseApp } from '../../../../@core/shared/base-app';
import { STRING_PATTERN } from '../../../../@components/constants';
import { MunicipalityService } from '../../../../@core/backend/common/services/municipality.service';


@Component({
  selector: 'ngx-municipality-detail',
  templateUrl: './municipality-detail.component.html',
  styleUrls: ['./municipality-detail.component.scss']
})
export class MunicipalityDetailComponent extends BaseApp {
  municipality: any = {};

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: MunicipalityService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService) { 
      super();
      if (null != context.municipality){
        this.municipality = context.municipality;
      }
    }
    actionBtn : string = "Guardar";

    formMunicipality = this.fb.group({
      key: [null, Validators.compose([Validators.maxLength(30),Validators.required])],
      entity: [null, Validators.compose([Validators.maxLength(30),Validators.required])],
      municipalityName: [null, Validators.compose([Validators.maxLength(60),Validators.required])],
      version: [null, Validators.compose([Validators.pattern("^([0-9]+)+([.][0-9]+)+([.][0-9]+)?$"),Validators.required])],
    });
  
    get validateMunicipality(){
      return this.formMunicipality.controls;
    }
    
  ngOnInit(): void {
    if(this.municipality.key){
      this.actionBtn = "Actualizar";
      this.formMunicipality.patchValue(this.municipality)
      this.formMunicipality.controls['key'].disable();
    }
    
  }

  register(): void {
    const data = this.formMunicipality.value;
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
      this.service.update(this.municipality.key,data).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }
  }
}
