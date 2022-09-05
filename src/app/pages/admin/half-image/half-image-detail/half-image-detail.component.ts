import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { HalfImageService } from '../../../../@core/backend/common/services/half-image.service';
import { HalfImage } from '../../../../@core/interfaces/auction/half-image.model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-half-image-detail',
  templateUrl: './half-image-detail.component.html',
  styleUrls: ['./half-image-detail.component.scss']
})
export class HalfImageDetailComponent extends BasePage {

  
  halfImage: HalfImage;

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: HalfImageService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService) { 
      super();
      if (null != context.halfImage){
        this.halfImage = context.halfImage;
      }
    }
    actionBtn : string = "Guardar";

    formHalfImage = this.fb.group({
    id:[''],

    status: ['', Validators.required],

    route: ['', Validators.required],



    });
  
  get validateHalfImage(){
    return this.formHalfImage.controls;
  }
    
  ngOnInit(): void {
    
    if(this.halfImage){
      this.actionBtn = "Actualizar";
      this.formHalfImage.patchValue(this.halfImage)
     
    }
  }

  register(): void {
    const data = this.formHalfImage.value;
    if( this.actionBtn == "Guardar"){
      this.service.register(data).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }else{
      this.service.update(this.halfImage.id,data).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }
  }
}
