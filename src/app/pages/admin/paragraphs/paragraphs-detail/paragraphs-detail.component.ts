import { ChangeDetectorRef, Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { DomSanitizer } from '@angular/platform-browser';
import { BaseApp } from '../../../../@core/shared/base-app';
import { ParagraphsService } from '../../../../@core/backend/common/services/paragraphs.service';


@Component({
  selector: 'ngx-paragraphs-detail',
  templateUrl: './paragraphs-detail.component.html',
  styleUrls: ['./paragraphs-detail.component.scss']
})
export class ParagraphsDetailComponent extends BaseApp {
  paragraphForm: FormGroup;
  paragraph: any = {};

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: ParagraphsService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService) { 
      super();
      if (null != context.paragraph){
        this.paragraph = context.paragraph;
      }
    }
    actionBtn : string = "Guardar";

    formParagraph = this.fb.group({
      paragraph: [null, Validators.compose([Validators.pattern(""), Validators.required])],
      version: [null, Validators.compose([Validators.pattern("^([0-9]+)+([.][0-9]+)+([.][0-9]+)?$"),Validators.required])],
      reportName: [null, Validators.compose([Validators.pattern("[a-zA-Z]((\.|_|-)?[a-zA-ZáéíóúÁÉÍÓÚ\u0020]+){0,255}"), Validators.required])],
      
    });
  
    get validateParagraph(){
      return this.formParagraph.controls;
    }
    ngOnInit(): void {
    
      if(this.paragraph.paragraph){
        this.actionBtn = "Actualizar";
        this.formParagraph.controls['paragraph'].setValue(this.paragraph.paragraph);
        this.formParagraph.controls['version'].setValue(this.paragraph.version);
        this.formParagraph.controls['reportName'].setValue(this.paragraph.reportName);
      }
      
    }
  
    register(): void {
      const data = this.formParagraph.value;
      data.modificationDate = Date()

      if( this.actionBtn == "Guardar"){

        data.userCreation ="Rafael";
        data.userModification = "Antonio";
        data.creationDate = Date();;

        this.service.register(data).subscribe(data =>{
          this.windowRef.close();
        },err =>{
          console.log(err);
        })
      }else{
        this.service.update(this.paragraph.id,data).subscribe(data =>{
          this.windowRef.close();
        },err =>{
          console.log(err);
        })
      }
    }
}
