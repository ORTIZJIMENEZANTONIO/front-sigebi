import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { CourtService } from '../../../../@core/backend/common/services/court.service';
import { Court } from '../../../../@core/interfaces/auction/court.model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-court-detail',
  templateUrl: './court-detail.component.html',
  styleUrls: ['./court-detail.component.scss']
})
export class CourtDetailComponent extends BasePage {

  
  data: Court;

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: CourtService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService) { 
      super();
      if (null != context.data){
        this.data = context.data;
      }
    }
    actionBtn : string = "Guardar";

    formCourt = this.fb.group({
    id:[''],

    description: ['', Validators.required],

    manager: ['', Validators.required],
    
    street: ['', Validators.required],

    numExterior: ['', Validators.required],

    numInside: ['', Validators.required],

    cologne: ['', Validators.required],

    delegationMun: ['', Validators.required],

    zipCode: ['', Validators.required],

    numPhone: ['', Validators.required],

    circuitCVE: ['', Validators.required],

    numRegister: ['', Validators.required]

    });
  
  get validateCourt(){
    return this.formCourt.controls;
  }
    
  ngOnInit(): void {
    
    if(this.data){
      this.actionBtn = "Actualizar";
      this.formCourt.patchValue(this.data)
     
    }
  }

  register(): void {
    const data = this.formCourt.value;
    if( this.actionBtn == "Guardar"){
      this.service.register(data).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }else{
      this.service.update(this.data.id,data).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }
  }
}
