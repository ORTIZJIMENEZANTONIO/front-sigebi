import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { SaveValuesService } from '../../../../@core/backend/common/services/save-values.service';
import { SaveValues } from '../../../../@core/interfaces/auction/save-values.model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-save-values-detail',
  templateUrl: './save-values-detail.component.html',
  styleUrls: ['./save-values-detail.component.scss']
})
export class SaveValuesDetailComponent extends BasePage {

  data: SaveValues;

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: SaveValuesService,    
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService) { 
      super();
      if (null != context.data){
        this.data = context.data;
      }
    }
    actionBtn : string = "Guardar";

    form = this.fb.group({

      cve: ['', Validators.required],

      description: ['', Validators.required],

      location:['',Validators.required],

      responsible : ['',[Validators.required]],
  
      noRegistration: ['',[Validators.required]]

    });
  
  get validate(){
    return this.form.controls;
  }
    
  ngOnInit(): void {    
    if(this.data){
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.data);
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
      this.service.update(this.data.cve, data).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }
  }

}
