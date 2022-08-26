import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { BasePage } from '../../../../@core/shared/base-page';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbToastrService } from '@nebular/theme';
import { OriginService  } from '../../../../@core/backend/common/services/origin.service';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';

@Component({
  selector: 'ngx-origin-detail',
  templateUrl: './origin-detail.component.html',
  styleUrls: ['./origin-detail.component.scss']
})
export class OriginDetailComponent extends BasePage {

  public form: FormGroup;
  private data: any = {};
  public actionBtn: string = "Guardar";

  constructor(
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: OriginService,
    public windowRef: NbWindowRef,
    public toastrService: NbToastrService,
    @Inject(NB_WINDOW_CONTEXT) context
  ) {
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
      idTransferer: [null, Validators.compose([Validators.pattern("[0-9]{1,255}"),Validators.required])],
      keyTransferer: [null, Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9@.-_-]{1,255}")])],
      description: [null, Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9@.-_-]{1,255}")])],
      type: [null, Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9@.-_-]{1,255}")])],
      address: [null, Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9@.-_-]{1,255}")])],
      city: [null, Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9@.-_-]{1,255}")])],
      idCity: [null, Validators.compose([Validators.pattern("[0-9]{1,255}"),Validators.required])],
      keyEntityFederative: [null, Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9@.-_-]{1,15}")])],
    });
    
    }

    public get idTransferer() { return this.form.get('idTransferer'); }
    public get keyTransferer() { return this.form.get('keyTransferer'); }
    public get description() { return this.form.get('description'); }
    public get type() { return this.form.get('type'); }
    public get address() { return this.form.get('address'); }
    public get city() { return this.form.get('city'); }
    public get idCity() { return this.form.get('idCity'); }
    public get keyEntityFederative() { return this.form.get('keyEntityFederative'); }

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