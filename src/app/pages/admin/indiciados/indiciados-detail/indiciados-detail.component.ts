import { isNull } from '@angular/compiler/src/output/output_ast';
import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { IndiciadosService } from '../../../../@core/backend/common/services/indiciados.service';
import { Indiciados } from '../../../../@core/interfaces/auction/indiciados.model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-indiciados-detail',
  templateUrl: './indiciados-detail.component.html',
  styleUrls: ['./indiciados-detail.component.scss']
})
export class IndiciadosDetailComponent extends BasePage {

  data: Indiciados;

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: IndiciadosService,    
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService) { 
      super();
      if (null != context.Indiciados){
        this.data = context.Indiciados;
      }
    }
    actionBtn : string = "Guardar";

    form = this.fb.group({

      id:[''],

      name: ['', Validators.required],

      noRegistration:['',Validators.required],

      curp : ['',[Validators.required]],
  
      consecutive: ['',[Validators.required]]

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
