import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { MediumPhotographyService } from '../../../../@core/backend/common/services/medium-photography.service';
import { MediumPhotography } from '../../../../@core/interfaces/auction/medium-photography.model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-medium-photography-detail',
  templateUrl: './medium-photography-detail.component.html',
  styleUrls: ['./medium-photography-detail.component.scss']
})
export class MediumPhotographyDetailComponent extends BasePage {

  
  mediumPhotography: MediumPhotography;

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: MediumPhotographyService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService) { 
      super();
      if (null != context.mediumPhotography){
        this.mediumPhotography = context.mediumPhotography;
      }
    }
    actionBtn : string = "Guardar";

    form = this.fb.group({
    id:[''],

    route: ['', Validators.required],
    
    status: ['', Validators.required]

    });
  
  get validate(){
    return this.form.controls;
  }
    
  ngOnInit(): void {
    
    if(this.mediumPhotography){
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.mediumPhotography)
     
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
      this.service.update(this.mediumPhotography.id,data).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }
  }
}
