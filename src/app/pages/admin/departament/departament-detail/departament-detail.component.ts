import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { DepartamentService } from '../../../../@core/backend/common/services/departament.service';
import { Departament } from '../../../../@core/interfaces/auction/departament.model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-departament-detail',
  templateUrl: './departament-detail.component.html',
  styleUrls: ['./departament-detail.component.scss']
})
export class DepartamentDetailComponent extends BasePage {

  
  departament: Departament;

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: DepartamentService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService) { 
      super();
      if (null != context.departament){
        this.departament = context.departament;
      }
    }
    actionBtn : string = "Guardar";

    formDepartament = this.fb.group({
    id:[''],

    numDelegation: ['', Validators.required],

    numSubDelegation: ['', Validators.required],

    dsarea: ['', Validators.required],

    description: ['', Validators.required],
    
    lastOffice: ['', Validators.required],

    numRegister: ['', Validators.required],

    level: ['', Validators.required],

    depend: ['', Validators.required],

    depDelegation: ['', Validators.required],

    phaseEdo: ['', Validators.required]

    });
  
  get validateDepartament(){
    return this.formDepartament.controls;
  }
    
  ngOnInit(): void {
    
    if(this.departament){
      this.actionBtn = "Actualizar";
      this.formDepartament.patchValue(this.departament)
     
    }
  }

  register(): void {
    const data = this.formDepartament.value;
    if( this.actionBtn == "Guardar"){
      this.service.register(data).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }else{
      this.service.update(this.departament.id,data).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }
  }
}
