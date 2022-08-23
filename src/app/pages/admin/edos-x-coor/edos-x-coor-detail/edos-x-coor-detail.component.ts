import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { EdosxcoorService } from '../../../../@core/backend/common/services/edos-x-coor.service';
import { EdosXCoorInterface } from '../../../../@core/interfaces/auction/edos-x-coor.model';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-edos-x-coor-detail',
  templateUrl: './edos-x-coor-detail.component.html',
  styleUrls: ['./edos-x-coor-detail.component.scss']
})
export class EdosXCoorDetailComponent extends BasePage implements OnInit {
  public form: FormGroup;
  private data: EdosXCoorInterface;
  public actionBtn: string = "Guardar";
  constructor(
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: EdosxcoorService,
    public windowRef: NbWindowRef,
    @Inject(NB_WINDOW_CONTEXT) context) {
    super();
    if (null != context.data) {
      this.data = context.data;
    }
  }

  ngOnInit(): void {
    this.prepareForm();
  }
  private prepareForm() {
    this.form = this.fb.group({
      id: [null],
      description: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(80)])],
      noState: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(60)])],
      state: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(10)])],
      stage: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(10)])]
    });
    if (this.data) {
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.data)

    }
  }

  public get description() { return this.form.get('description'); }
  public get noState() { return this.form.get('noState'); }
  public get state() { return this.form.get('state'); }
  public get stage() { return this.form.get('stage'); }

  public register(): void {
    const data = this.form.getRawValue();
    this.actionBtn == "Guardar" ? this.createRegister(data) : this.updateRegister(data);
  }
  private createRegister(data): void {
    this.service.register(data).subscribe(
      () => {
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
      () => {
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
