import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { InstitutionClassificationService } from '../../../../@core/backend/common/services/institution-classification.service';
import { InstitutionClassification } from '../../../../@core/interfaces/auction/institution-classification.model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-institution-classification-detail',
  templateUrl: './institution-classification-detail.component.html',
  styleUrls: ['./institution-classification-detail.component.scss']
})
export class InstitutionClassificationDetailComponent extends BasePage {

  
  institutionClassification: InstitutionClassification;

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: InstitutionClassificationService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService) { 
      super();
      if (null != context.institutionClassification){
        this.institutionClassification = context.institutionClassification;
      }
    }
    actionBtn : string = "Guardar";

    formInstitutionClassification = this.fb.group({
    id:[''],

    numRegister: ['', Validators.required],

    description: ['', Validators.required]

    });
  
  get validateInstitutionClassification(){
    return this.formInstitutionClassification.controls;
  }
    
  ngOnInit(): void {
    
    if(this.institutionClassification){
      this.actionBtn = "Actualizar";
      this.formInstitutionClassification.patchValue(this.institutionClassification)
     
    }
  }

  register(): void {
    const data = this.formInstitutionClassification.value;
    if( this.actionBtn == "Guardar"){
      this.service.register(data).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }else{
      this.service.update(this.institutionClassification.id,data).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }
  }
}
