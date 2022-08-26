import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { IssuingInstitutionService } from '../../../../@core/backend/common/services/issuing-institution.service';
import { IssuingInstitution } from '../../../../@core/interfaces/auction/issuing-institution.model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-issuing-institution-detail',
  templateUrl: './issuing-institution-detail.component.html',
  styleUrls: ['./issuing-institution-detail.component.scss']
})
export class IssuingInstitutionDetailComponent extends BasePage {

  
  issuingInstitution: IssuingInstitution;

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: IssuingInstitutionService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService) { 
      super();
      if (null != context.issuingInstitution){
        this.issuingInstitution = context.issuingInstitution;
      }
    }
    actionBtn : string = "Guardar";

    form = this.fb.group({
    id:[''],

    name: ['', Validators.required],

    description: ['', Validators.required],
    
    manager: ['', Validators.required],

    street : ['', Validators.required],

    numInside: ['', Validators.required],

    numExterior: ['', Validators.required],

    cologne: ['', Validators.required],

    zipCode: ['', Validators.required],

    delegMunic: ['', Validators.required],

    phone: ['', Validators.required],

    numClasif: ['', Validators.required],

    numCity: ['', Validators.required],

    numRegister: ['', Validators.required],

    numTransference: ['', Validators.required]

   

    });
  
  get validate(){
    return this.form.controls;
  }
    
  ngOnInit(): void {
    
    if(this.issuingInstitution){
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.issuingInstitution)
     
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
      this.service.update(this.issuingInstitution.id,data).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }
  }
}
