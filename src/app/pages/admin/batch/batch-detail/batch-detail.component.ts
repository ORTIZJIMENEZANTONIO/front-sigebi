import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { BatchService } from '../../../../@core/backend/common/services/batch.service';
import { Batch } from '../../../../@core/interfaces/auction/batch.model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-batch-detail',
  templateUrl: './batch-detail.component.html',
  styleUrls: ['./batch-detail.component.scss']
})
export class BatchDetailComponent extends BasePage {

  
  data: Batch;

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: BatchService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService) { 
      super();
      if (null != context.data){
        this.data = context.data;
      }
    }
    actionBtn : string = "Guardar";

    formBatch = this.fb.group({
    id:[''],

    numStore: ['', Validators.required],

    numRegister: ['', Validators.required],
    
    description: ['', Validators.required],

    status: ['', Validators.required],

    });
  
  get validateBatch(){
    return this.formBatch.controls;
  }
    
  ngOnInit(): void {
    
    if(this.data){
      this.actionBtn = "Actualizar";
      this.formBatch.patchValue(this.data)
     
    }
  }

  register(): void {
    const data = this.formBatch.value;
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
