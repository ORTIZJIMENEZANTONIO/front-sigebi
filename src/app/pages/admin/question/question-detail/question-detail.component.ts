import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { BasePage } from '../../../../@core/shared/base-page';

import { QuestionInterface } from '../../../../@core/interfaces/auction/question.model';
import { QuestionService } from '../../../../@core/backend/common/services/question.service';


@Component({
  selector: 'ngx-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent extends BasePage {

  question: QuestionInterface;

  constructor(
    @Inject(NB_WINDOW_CONTEXT) context, 
    private fb: FormBuilder, 
    protected cd: ChangeDetectorRef, 
    protected router: Router, 
    private service: QuestionService,
    public windowRef: NbWindowRef, 
    private dom: DomSanitizer, 
    private windowService: NbWindowService) { 
      super();
      if (null != context.questions)
        this.question = context.questions;  
    }

    actionBtn : string = "Guardar";

    form = this.fb.group({

      id:[''],
      text: ['',Validators.required],
      type: ['', Validators.required],
      maximumScore: ['',[Validators.required]],
      registerNumber: ['',[Validators.required]],
      
    });
  
  get validateDelegation(){
    return this.form.controls;
  }
    
  ngOnInit(): void {
    if(this.question){
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.question);
    }
  }

  register(): void {
    const data = this.form.value;
    this.actionBtn == "Guardar" ? this.createRegister( data ) : this.updateRegister( data );
  }

  createRegister( data ): void {
    this.service.register(data).subscribe( () => {
      this.windowRef.close();
    },
    err =>{
      console.log(err);
    })
  }

  updateRegister( data ): void {
    this.service.update(this.question.id, data).subscribe( () => {
      this.windowRef.close();
    },
    err => {
      console.error(err);
    })
  }

}
