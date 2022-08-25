import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService, NbToastrService } from '@nebular/theme';
import { OriginCisiService } from '../../../../@core/backend/common/services/origin-cisi.service';
import { SweetAlertConstants, SweetalertModel } from '../../../../@core/interfaces/auction/sweetalert-model';
=======
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { ParagraphsService } from '../../../../@core/backend/common/services/paragraphs.service';
import { OriginCisiInterface } from '../../../../@core/interfaces/auction/origin-cisi.model';
>>>>>>> 3fee159132d2c12e33e949fae17d361950d48746
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-origin-cisi-detail',
  templateUrl: './origin-cisi-detail.component.html',
  styleUrls: ['./origin-cisi-detail.component.scss']
})
export class OriginCisiDetailComponent extends BasePage {
  form: FormGroup;
  originCisi: OriginCisiInterface;

<<<<<<< HEAD
  constructor(
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: OriginCisiService,
    public windowRef: NbWindowRef,
    @Inject(NB_WINDOW_CONTEXT) context,
    private dom: DomSanitizer,
    private windowService: NbWindowService,
    public toA: NbToastrService,
    public sweetalertService: SweetalertService) {
    super(toA);
    if (null != context.data) {
      this.data = context.data;
    }
  }
  actionBtn: string = "Guardar";
=======
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
>>>>>>> 3fee159132d2c12e33e949fae17d361950d48746

    this.form = this.fb.group({
      detail:  [null, Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9@.-_-]{1,40}")])],
    });


    }
    actionBtn : string = "Guardar";


  
    get validate(){
      return this.form.controls;
    }
    ngOnInit(): void {
    
      if(this.originCisi){
        this.actionBtn = "Actualizar";

      }
      
    }
  
<<<<<<< HEAD
    public register(): void {
      const data = this.form.getRawValue();
      this.actionBtn == "Guardar" ? this.createRegister(data) : this.updateRegister(data);
    }
    private createRegister(data): void {
      this.service.register(data).subscribe(
        data => {
          this.onLoadFailed('success', 'Despacho', 'Registrado Correctamente');
        }, err => {
          let error = '';
          if (err.status === 0) {
            error = SweetAlertConstants.noConexion;
          } else {
            error = err.message;
          }
          this.onLoadFailed('danger', 'Error', error);
        }, () => {
          this.windowRef.close();
        });
    }
    private updateRegister(data): void {
      this.service.update(this.data.id, data).subscribe(
        data => {
          this.onLoadFailed('success', 'Despacho', 'Actualizado Correctamente');
        }, err => {
          let error = '';
          if (err.status === 0) {
            error = SweetAlertConstants.noConexion;
          } else {
            error = err.message;
          }
          this.onLoadFailed('danger', 'Error', error);
        }, () => {
          this.windowRef.close();
        });
    }
  }
  
=======
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
>>>>>>> 3fee159132d2c12e33e949fae17d361950d48746
