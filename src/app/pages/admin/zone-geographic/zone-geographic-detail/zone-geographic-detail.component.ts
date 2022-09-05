import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService, NbToastrService } from '@nebular/theme';
import { OfficesService } from '../../../../@core/backend/common/services/offices.service';
import { ZoneGeographicService } from '../../../../@core/backend/common/services/zone-geographic.service';
import { SweetAlertConstants, SweetalertModel } from '../../../../@core/interfaces/auction/sweetalert-model';
import { BasePage } from '../../../../@core/shared/base-page';
import { SweetalertService } from '../../../../shared/sweetalert.service';

@Component({
  selector: 'ngx-zone-geographic-detail',
  templateUrl: './zone-geographic-detail.component.html',
  styleUrls: ['./zone-geographic-detail.component.scss']
})
export class ZoneGeographicDetailComponent extends BasePage {

  Form: FormGroup;
  data: any = {};

  constructor(
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: ZoneGeographicService,
    public windowRef: NbWindowRef,
    @Inject(NB_WINDOW_CONTEXT) context,
    private dom: DomSanitizer,
    private windowService: NbWindowService,
    public toastrService: NbToastrService,
    public sweetalertService: SweetalertService) {
    super(toastrService);
    if (null != context.data) {
      this.data = context.data;
    }
  }
  actionBtn: string = "Guardar";

  form = this.fb.group({
    id_zona_geografica: [null],
    descripcion: [null, Validators.compose([Validators.pattern(""), Validators.required])],
    no_contrato: [null, Validators.compose([Validators.pattern(""), Validators.required])],
    version: [null, Validators.compose([Validators.pattern(""), Validators.required])],
    tercero_especializado: [null, Validators.compose([Validators.pattern(""), Validators.required])],
    iva: [null, Validators.compose([Validators.pattern(""), Validators.required])],
    estatus: [null, Validators.compose([Validators.pattern(""), Validators.required])]
  });

  get validateOpinion() {
    return this.form.controls;
  }
  ngOnInit(): void {
    if (this.data.id_zona_geografica != null) {
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.data);
    }

  }

  register(): void {
    let params = {  
      usuario_creacion: 'User',
      fecha_creacion:new Date(),
      usuario_modificacion:'User',
      fecha_modificacion:new Date(),
      descripcion:this.form.value.descripcion,
      no_contrato:this.form.value.no_contrato,
      version:this.form.value.version,
      tercero_especializado:this.form.value.tercero_especializado,
      iva:this.form.value.iva,
      estatus:this.form.value.estatus      
    }
    if (this.actionBtn == "Guardar") {
      this.service.register(params).subscribe(
        data => {
          this.onLoadFailed('success', 'Zona Geográfica', 'Registrado Correctamente');
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
    } else {
      this.service.update(this.data.id_zona_geografica, params).subscribe(
        data => {
          this.onLoadFailed('success', 'Zona Geográfica', 'Actualizado Correctamente');
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
}