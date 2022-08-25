import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService, NbWindowRef, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';
import { BasePage } from '../../../../@core/shared/base-page';

import { STRING_PATTERN } from '../../../../@components/constants';
import { SiseProcessService } from '../../../../@core/backend/common/services/sise-process.service';
import { SiseProcessInterface } from '../../../../@core/interfaces/auction/sise-process.model';

@Component({
  selector: 'ngx-sise-process-detail',
  templateUrl: './sise-process-detail.component.html',
  styleUrls: ['./sise-process-detail.component.scss']
})
export class SiseProcessDetailComponent extends BasePage {

  public form: FormGroup;
  private data: SiseProcessInterface;
  public actionBtn: string = "Guardar";

  constructor(
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: SiseProcessService,
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
      description: [null, Validators.compose([Validators.pattern(STRING_PATTERN), Validators.maxLength(50),  Validators.minLength(1) ])],
    });
    if (this.data.id != null) {
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
        this.onLoadFailed('success', 'Serie', 'Registrado Correctamente');
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
    this.service.update(this.data.id, data).subscribe(
      (response) => {
        this.onLoadFailed('success', 'Serie', 'Actualizado Correctamente');
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
