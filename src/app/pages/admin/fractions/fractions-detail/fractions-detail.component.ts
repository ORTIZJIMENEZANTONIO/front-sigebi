import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { DomSanitizer } from '@angular/platform-browser';
import { BasePage } from '../../../../@core/shared/base-page';
import { FractionsModel } from '../../../../@core/interfaces/auction/fractions.model';
import { FractionsService } from '../../../../@core/backend/common/services/fractions.service';
import { NormService } from '../../../../@core/backend/common/services/norm.service';
import { BehaviorSubject } from 'rxjs';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';

@Component({
  selector: 'ngx-fractions-detail',
  templateUrl: './fractions-detail.component.html',
  styleUrls: ['./fractions-detail.component.scss']
})
export class FractionsDetailComponent extends BasePage {
  public formFraction: FormGroup;
  private data: FractionsModel;
  public actionBtn: string = "Guardar";
  public filteredOptions$: BehaviorSubject<any[]> = new BehaviorSubject([]);
  public filteredsubdelegations$: BehaviorSubject<any[]> = new BehaviorSubject([]);
  constructor(
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: FractionsService,
    public windowRef: NbWindowRef,
    private normService: NormService,
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
    this.formFraction = this.fb.group({
      code: [null, Validators.compose([Validators.required])],
      level: [null, Validators.compose([Validators.required])],
      description: [null, Validators.compose([Validators.required])],
      parentId: [null, Validators.compose([Validators.pattern("[0-9]{0,255}"), Validators.required])],
      normId: [null, Validators.compose([Validators.pattern("[0-9]{0,255}"), Validators.required])],
      normDetalle: [null, Validators.compose([Validators.required])],
      unit: [null, Validators.compose([Validators.required])],
      clasificationId: [null, Validators.compose([Validators.pattern("[0-9]{0,255}"), Validators.required])],
      relevantTypeId: [null, Validators.compose([Validators.pattern("[0-9]{0,255}"), Validators.required])],
      version: [null, Validators.compose([Validators.pattern("^([0-9]+)+([.][0-9]+)+([.][0-9]+)?$"), Validators.required])],
      codeErp1: [null, Validators.compose([Validators.pattern("[a-z-A-Z]{0,30}"), Validators.required])],
      codeErp2: [null, Validators.compose([Validators.pattern("[a-z-A-Z]{0,30}"), Validators.required])],
      codeErp3: [null, Validators.compose([Validators.pattern("[a-z-A-Z]{0,30}"), Validators.required])],
      decimalAmount: [null, Validators.compose([Validators.pattern("[a-z-A-Z]{0,1}"), Validators.required])],
      status: [null, Validators.compose([Validators.required])],
      fractionCode: [null, Validators.compose([Validators.pattern("[0-9]{1,255}"), Validators.required])],
    });
    if (this.data) {
      this.actionBtn = "Actualizar";
      this.formFraction.patchValue(this.data)

    }
    this.formFraction.controls['normDetalle'].valueChanges.subscribe((value: string) => {
      if (value) {
        this.normService.search(value).subscribe(data => {
          this.filteredOptions$.next(data);
        })
      }
    });
  }

  public get code() { return this.formFraction.get('code'); }
  public get level() { return this.formFraction.get('level'); }
  public get description() { return this.formFraction.get('description'); }
  public get parentId() { return this.formFraction.get('parentId'); }
  public get normId() { return this.formFraction.get('normId'); }
  public get normDetalle() { return this.formFraction.get('normDetalle'); }
  public get unit() { return this.formFraction.get('unit'); }
  public get clasificationId() { return this.formFraction.get('clasificationId'); }
  public get relevantTypeId() { return this.formFraction.get('relevantTypeId'); }
  public get version() { return this.formFraction.get('version'); }
  public get codeErp1() { return this.formFraction.get('codeErp1'); }
  public get codeErp2() { return this.formFraction.get('codeErp2'); }
  public get codeErp3() { return this.formFraction.get('codeErp3'); }
  public get decimalAmount() { return this.formFraction.get('decimalAmount'); }
  public get estatus() { return this.formFraction.get('status'); }
  public get fractionCode() { return this.formFraction.get('fractionCode'); }

  public onSelectionChangeNorm(event) {
    if (event.id) {
      this.normId.patchValue(event.id);
      this.normDetalle.patchValue(event.norm);
    }

  }
  public register(): void {
    const data = this.formFraction.getRawValue();
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
