import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { LegalSupportService } from '../../../../@core/backend/common/services/legal-support.service';
import { BaseApp } from '../../../../@core/shared/base-app';

@Component({
  selector: 'ngx-legal-support-detail',
  templateUrl: './legal-support-detail.component.html',
  styleUrls: ['./legal-support-detail.component.scss']
})
export class LegalSupportDetailComponent extends BaseApp implements OnInit {
  Form: FormGroup;
  data: any = {};

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: LegalSupportService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer, private windowService: NbWindowService) {
    super();
    if (null != context.data) {
      this.data = context.data;
    }
  }
  actionBtn: string = "Guardar";

  form = this.fb.group({
    id: ['', [Validators.required, Validators.minLength(5),Validators.maxLength(5)]],
    support: [null, Validators.compose([Validators.pattern("")])]
  });

  get validateLegalSupport() {
    return this.form.controls;
  }
  ngOnInit(): void {
    if (this.data.id != null) {
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.data);
    }

  }

  register(): void {
    if (this.actionBtn == "Guardar") {
      this.service.register(this.form.value).subscribe(data => {
        this.windowRef.close();
      }, err => {
        console.log(err);
      })
    } else {
      this.service.update(this.data.id, this.form.value).subscribe(data => {
        this.windowRef.close();
      }, err => {
        console.log(err);
      })
    }
  }
}
