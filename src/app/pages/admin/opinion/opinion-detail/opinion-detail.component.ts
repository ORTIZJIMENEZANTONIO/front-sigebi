import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { OpinionService } from '../../../../@core/backend/common/services/opinion.service';
import { Opinion } from '../../../../@core/interfaces/auction/opinion.model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-opinion-detail',
  templateUrl: './opinion-detail.component.html',
  styleUrls: ['./opinion-detail.component.scss']
})
export class OpinionDetailComponent extends BasePage {

  data: Opinion;

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: OpinionService,    
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService) { 
      super();
      if (null != context.Opinion){
        this.data = context.Opinion;
      }
    }
    actionBtn : string = "Guardar";

    form = this.fb.group({

      id:[''],

      description: ['', Validators.required],

      noRegistration:['',Validators.required],

      dict_ofi : ['',[Validators.required]],
  
      areaProcess: ['',[Validators.required]]

    });
  
  get validate(){
    return this.form.controls;
  }
    
  ngOnInit(): void {
    
    if(this.data){
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.data)     
    }
  }

  register(): void {
    const data = this.form.value;
    data.usuario_creacion = 1;
    data.fecha_creacion = new Date();
    data.usuario_modificacion = 1 ;
    data.fecha_modificacion = new Date;
    console.log(data)
    
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
