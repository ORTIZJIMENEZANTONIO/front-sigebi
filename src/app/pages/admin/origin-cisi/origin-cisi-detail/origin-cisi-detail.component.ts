import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { ParagraphsService } from '../../../../@core/backend/common/services/paragraphs.service';
import { OriginCisiInterface } from '../../../../@core/interfaces/auction/origin-cisi.model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-origin-cisi-detail',
  templateUrl: './origin-cisi-detail.component.html',
  styleUrls: ['./origin-cisi-detail.component.scss']
})
export class OriginCisiDetailComponent extends BasePage {
  form: FormGroup;
  originCisi: OriginCisiInterface;

  constructor(private fb: FormBuilder,
     protected cd: ChangeDetectorRef, 
     protected router: Router, 
     private service: ParagraphsService,
     public windowRef: NbWindowRef, 
     @Inject(NB_WINDOW_CONTEXT) context, 
     private dom: DomSanitizer,  
     ) { 
      super();
      if (null != context.originCisi){
        this.originCisi = context.originCisi;
      }

    this.form = this.fb.group({
      detail:  [null, Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9@.-_-]{1,40}")])],
    });


    }
    actionBtn : string = "Guardar";


  
    get validateDelegation(){
      return this.form.controls;
    }
    ngOnInit(): void {
    
      if(this.originCisi){
        this.actionBtn = "Actualizar";

      }
      
    }
  
    register(): void {
      const data = this.form.value;
      data.modificationDate = Date()

      if( this.actionBtn == "Guardar"){

        data.userCreation ="Rafael";
        data.userModification = "Antonio";
        data.creationDate = new Date();;

        this.service.register(data).subscribe(data =>{
          this.windowRef.close();
        },err =>{
          console.log(err);
        })
      }else{
        this.service.update(this.originCisi.id,data).subscribe(data =>{
          this.windowRef.close();
        },err =>{
          console.log(err);
        })
      }
    }
}
