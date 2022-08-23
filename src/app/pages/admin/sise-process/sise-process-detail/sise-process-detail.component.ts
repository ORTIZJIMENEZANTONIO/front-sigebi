import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';
import { BasePage } from '../../../../@core/shared/base-page';

import { SiseProcessService } from '../../../../@core/backend/common/services/sise-process.service';

@Component({
  selector: 'ngx-sise-process-detail',
  templateUrl: './sise-process-detail.component.html',
  styleUrls: ['./sise-process-detail.component.scss']
})
export class SiseProcessDetailComponent  extends BasePage implements OnInit {

  public form: FormGroup;
  private data: any = {};
  public actionBtn: string = "Guardar";

  constructor(
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: SiseProcessService,
    public windowRef: NbWindowRef,
    @Inject(NB_WINDOW_CONTEXT) context
    ) {
    super();
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
      description: [null, Validators.compose([Validators.pattern(""), Validators.maxLength(50)])],
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
      data => {
        this.windowRef.close();
        //this.onLoadFailed('success', 'Proceso SISE', 'Registrado Correctamente');
      }, err => {
        const error = err.status === 0
          ? SweetAlertConstants.noConexion
          : err.message;
        this.onLoadFailed('danger', 'Error', error);
      } );
  }

  private updateRegister(data): void {
    this.service.update(this.data.id, data).subscribe(
      data => {
        this.windowRef.close();
        // this.onLoadFailed('success', 'Proceso SISE', 'Actualizado Correctamente');
      }, err => {
        const error = err.status === 0
          ? SweetAlertConstants.noConexion
          : err.message;
        this.onLoadFailed('danger', 'Error', error);
      });
  }

}
