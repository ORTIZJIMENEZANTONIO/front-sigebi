import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NbWindowService, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { PenaltyService } from '../../../../@core/backend/common/services/penalty.service';
import { Penalty } from '../../../../@core/interfaces/auction/penalty.model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-penalty-detail',
  templateUrl: './penalty-detail.component.html',
  styleUrls: ['./penalty-detail.component.scss']
})
export class PenaltyDetailComponent extends BasePage implements OnInit {

  penalty: Penalty;

  constructor(
    @Inject(NB_WINDOW_CONTEXT) context,
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: PenaltyService,
    public windowRef: NbWindowRef,
    private dom: DomSanitizer,
    private windowService: NbWindowService) {
    super();
    if (null != context.questions)
      this.penalty = context.questions;
  }

  actionBtn: string = "Guardar";

  form = this.fb.group({
    id: [''],
    serviceType: ['', Validators.required],
    penaltyPercentage: ['', Validators.required],
    equivalentDays: [0, [Validators.required]],
    version: [null, Validators.compose([Validators.pattern("^([0-9]+)+([.][0-9]+)+([.][0-9]+)?$"), Validators.required])],
    status: [null, Validators.compose([Validators.required])],
    contractNumber: ['', Validators.required]
  });

  get validatePenalty() {
    return this.form.controls;
  }

  ngOnInit(): void {
    if (this.penalty) {
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.penalty);
    }
  }

  register(): void {
    const data = this.form.value;

    this.actionBtn == "Guardar" ? this.createRegister(data) : this.updateRegister(data);
  }

  createRegister(data): void {
    data.usuario_creacion = "Rafael";
    data.fecha_creacion = new Date();

    this.service.register(data).subscribe(() => {
      this.windowRef.close();
    },
      err => {
        console.log(err);
      })
  }

  updateRegister(data): void {
    data.usuario_modificacion = "Rafael";
    data.fecha_modificacion = new Date();
    this.service.update(this.penalty.id, data).subscribe(() => {
      this.windowRef.close();
    },
      err => {
        console.error(err);
      })
  }
}
