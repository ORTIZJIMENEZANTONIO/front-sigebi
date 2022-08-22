import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { ParagraphsService } from '../../../../@core/backend/common/services/paragraphs.service';
import { ScoreInterface } from '../../../../@core/interfaces/auction/score.model';
import { BasePage } from '../../../../@core/shared/base-page';
@Component({
  selector: 'ngx-score-detail',
  templateUrl: './score-detail.component.html',
  styleUrls: ['./score-detail.component.scss']
})
export class ScoreDetailComponent extends BasePage {

  form: FormGroup;
  score: ScoreInterface;

  constructor(private fb: FormBuilder, 
    protected cd: ChangeDetectorRef, 
    protected router: Router, 
    private service: ParagraphsService,
    public windowRef: NbWindowRef, 
    @Inject(NB_WINDOW_CONTEXT) context, 
    private dom: DomSanitizer,  
    private windowService: NbWindowService) { 
      super();
      if (null != context.score){
        this.score = context.score;
      }
   
  

    this.form = this.fb.group({
      
      code:[null, Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9@.-_-]{1,2}")])],
      initialRank: [null, Validators.compose([Validators.pattern("[0-9]{1,255}"),Validators.required])],
      endRank: [null, Validators.compose([Validators.pattern("[0-9]{1,255}"),Validators.required])],
      clasification: [null, Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9@.-_-]{1,500}")])],
      registryNumber: [null, Validators.compose([Validators.pattern("[0-9]{1,255}"),Validators.required])],

    });
   } 
   
   
   actionBtn : string = "Guardar";
    get validateScore(){
      return this.form.controls;
    }
    ngOnInit(): void {
    
      if(this.score){
        this.actionBtn = "Actualizar";
      }
      
    }
  
    register(): void {
      const data = this.form.value;
      data.modificationDate = new Date()

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
        this.service.update(this.score.id,data).subscribe(data =>{
          this.windowRef.close();
        },err =>{
          console.log(err);
        })
      }
    }

}
