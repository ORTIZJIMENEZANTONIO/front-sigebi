import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { BehaviorSubject } from 'rxjs';
import { SatClassificationService } from '../../../../@core/backend/common/services/sat-classification.service';
import { SatSubclasificationService } from '../../../../@core/backend/common/services/sat-subclasification.service';
import { SatSubclasification } from '../../../../@core/interfaces/auction/sat-subclasification.model';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';
import { BaseApp } from '../../../../@core/shared/base-app';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-sat-subclasification-detail',
  templateUrl: './sat-subclasification-detail.component.html',
  styleUrls: ['./sat-subclasification-detail.component.scss']
})
export class SatSubclasificationDetailComponent extends BasePage implements OnInit {
  public filteredOptions$: BehaviorSubject<any[]> = new BehaviorSubject([]);
  public form: FormGroup;
  private data: any = {};
  public actionBtn: string = "Guardar";

  constructor(
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: SatSubclasificationService,
    private subService: SatClassificationService,
    public windowRef: NbWindowRef,
    @Inject(NB_WINDOW_CONTEXT) context
  ) {
    super();
    if (null != context.questions)
      this.data = context.questions;
  }

  ngOnInit(): void {
    this.prepareForm();
  }
  private prepareForm(): void {
    this.form = this.fb.group({
      id: [null],
      nameSubClasification: [null, Validators.compose([Validators.pattern("")])],
      idClasification: [0, [Validators.required]],
      nombre_clasificacion: ['', Validators.required]
    });
    if (this.data.id != null) {
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.data);
    }
    this.nombre_clasificacion.valueChanges.subscribe((value: string) => {
      if (value) {
        this.subService.search(value).subscribe(data => {
          this.filteredOptions$.next(data);
        })
      }
    })
  }

  public get nombre_clasificacion() { return this.form.get('nombre_clasificacion'); }
  public get nameSubClasification() { return this.form.get('nameSubClasification'); }
  public get idClasification() { return this.form.get('idClasification'); }

  public onSelectionChangeClasification(event) {
    if (event.id) {
      this.idClasification.patchValue(event.id);
      this.nombre_clasificacion.patchValue(event.nombre_clasificacion);
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
      }, () => {
        this.windowRef.close();
      });
  }
}
