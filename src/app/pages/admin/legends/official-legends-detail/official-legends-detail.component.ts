import { ChangeDetectorRef, Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { DomSanitizer } from '@angular/platform-browser';
import { BaseApp } from '../../../../@core/shared/base-app';
import { STRING_PATTERN } from '../../../../@components/constants';
import { LegendsService } from '../../../../@core/backend/common/services/legends.service';

@Component({
  selector: 'ngx-official-legends-detail',
  templateUrl: './official-legends-detail.component.html',
  styleUrls: ['./official-legends-detail.component.scss']
})
export class OfficialLegendsDetailComponent extends BaseApp {

  legendForm: FormGroup;
  legend: any = {};

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: LegendsService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService) { 
      super();
      if (null != context.legend){
        this.legend = context.legend;
      }
    }
    actionBtn : string = "Guardar";

    formLegend = this.fb.group({
      legend: [null, Validators.compose([Validators.pattern("[a-zA-Z]((\.|_|-)?[a-zA-ZáéíóúÁÉÍÓÚ\u0020]+){0,255}"), Validators.required])],
      version: [null, Validators.compose([Validators.pattern("^([0-9]+)+([.][0-9]+)+([.][0-9]+)?$"),Validators.required])],
      status: [null, Validators.compose([Validators.required])],
    });
  
    get validateLegend(){
      return this.formLegend.controls;
    }
    
  ngOnInit(): void {
    
    if(this.legend.legend){
      this.actionBtn = "Actualizar";
      this.formLegend.controls['legend'].setValue(this.legend.legend);
      this.formLegend.controls['version'].setValue(this.legend.version);
      this.formLegend.controls['status'].setValue(this.legend.status!="NaN"?this.legend.status:'');
    }else{
      this.formLegend.controls['status'].setValue(0);
    }
    
  }

  register(): void {
    const data = this.formLegend.value;
    data.modificationDate = Date();
    if( this.actionBtn == "Guardar"){

      data.userCreation ="Rafael";
      data.userModification = "Antonio";
      data.creationDate = Date();

      this.service.register(data).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }else{
      this.service.update(this.legend.id,data).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }
  }
}
