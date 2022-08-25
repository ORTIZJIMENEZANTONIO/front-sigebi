import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService, NbWindowRef, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';
import { BasePage } from '../../../../@core/shared/base-page';

import { STRING_PATTERN } from '../../../../@components/constants';
import { ResponseRepuveInterface } from '../../../../@core/interfaces/auction/response-repuve.model';
import { ResponseRepuveService } from '../../../../@core/backend/common/services/reponse-repuve..service';

@Component({
  selector: 'ngx-response-repuve-detail',
  templateUrl: './response-repuve-detail.component.html',
  styleUrls: ['./response-repuve-detail.component.scss']
})
export class ResponseRepuveDetailComponent extends BasePage {
  
  public form: FormGroup;
  private data: ResponseRepuveInterface;
  public actionBtn: string = "Guardar";

  constructor(
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: ResponseRepuveService,
    public windowRef: NbWindowRef,
    public toastrService: NbToastrService,
    @Inject(NB_WINDOW_CONTEXT) context) {
    super(toastrService);
    if (null != context.data) {
      this.data = context.data;
    }    
  }

  ngOnInit(): void {
    this.prepareForm();
  }

  private prepareForm(): void {
    this.form = this.fb.group({
      id: [null],
      description: [null, Validators.compose([Validators.required, Validators.pattern(STRING_PATTERN), Validators.maxLength(200),  Validators.minLength(1) ])],
    });
    if (this.data) {
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.data);
    }
  }

  public get id() { return this.form.get('id'); }
  public get description() { return this.form.get('description'); }

  public register(): void {
    const data = this.form.getRawValue();
    this.actionBtn == "Guardar" ? this.createRegister(data) : this.updateRegister(data);
  }

  private createRegister(data): void {
    this.service.register(data).subscribe(
      (res) => {
        this.onLoadFailed('success', 'Servicio', 'Registrado Correctamente');
      }, err => {
        const error = err.status === 0
          ? SweetAlertConstants.noConexion
          : err.message;
        this.onLoadFailed('danger', 'Error', error);
      }, () => {
        this.windowRef.close();
      });
  }

  private updateRegister(data): void {
    delete data.id;
    this.service.update(this.data.id, data).subscribe(
      (response) => {
        this.onLoadFailed('success', 'Servicio', 'Actualizado Correctamente');
      }, err => {
        const error = err.status === 0
          ? SweetAlertConstants.noConexion
          : err.message;
        this.onLoadFailed('danger', 'Error', error);
      }, () => {
        this.windowRef.close();
      });
  }

}
