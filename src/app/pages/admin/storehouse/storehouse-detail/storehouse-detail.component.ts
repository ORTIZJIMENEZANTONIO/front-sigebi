import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { BasePage } from '../../../../@core/shared/base-page';
import { StorehouseService } from '../../../../@core/backend/common/services/storehouse.service';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';

@Component({
  selector: 'ngx-storehouse-detail',
  templateUrl: './storehouse-detail.component.html',
  styleUrls: ['./storehouse-detail.component.scss']
})
export class StorehouseDetailComponent extends BasePage {

  public form: FormGroup;
  private data: any = {};
  public actionBtn: string = "Guardar";
  constructor(private fb: FormBuilder, 
    protected cd: ChangeDetectorRef, 
    protected router: Router, 
    private service: StorehouseService,
    public windowRef: NbWindowRef, 
    @Inject(NB_WINDOW_CONTEXT) context, 
    private dom: DomSanitizer,  
    private windowService: NbWindowService) { 
      super();
      if (null != context.data){
        this.data = context.data;
      }

    this.form = this.fb.group({

      idStorehouse:[''],
      manager: ['',Validators.required],
      descripcion: ['', Validators.required],
      municipality: ['',[Validators.required]],
      locality: ['',[Validators.required]],
      ubication: ['',[Validators.required]],
      idEntity: ['',Validators.required],

    });
  }  
  get validateStorehouse(){
    return this.form.controls;
  }
  ngOnInit(): void {
  
    if(this.data){
      this.actionBtn = "Actualizar";
    }
    
  }
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

      })
}
}
