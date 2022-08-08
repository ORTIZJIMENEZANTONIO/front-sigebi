import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { NotaryService } from '../../../../@core/backend/common/services/notary.service';
import { Notary } from '../../../../@core/interfaces/auction/notary.model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-notary-detail',
  templateUrl: './notary-detail.component.html',
  styleUrls: ['./notary-detail.component.scss']
})
export class NotaryDetailComponent extends BasePage {

  notary: Notary;

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: NotaryService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer, private windowService: NbWindowService) {
    super();
    if (null != context.notary) {
      this.notary = context.notary;
    }
  }
  actionBtn: string = "Guardar";

  formNotary = this.fb.group({
    id: [''],
    nombre: ['', Validators.compose([Validators.pattern("[a-zA-Z]((\.|_|-)?[a-zA-ZáéíóúÁÉÍÓÚ\u0020]+){0,255}"), Validators.required])],

    valido: ['', [Validators.required, Validators.maxLength(2)]],

    no_notaria: ['', [Validators.required]],
    no_registro: ['', [Validators.required]],

    ubicacion: ['', [Validators.required]],

    domicilio: ['', [Validators.required]],

    telefono: ['', Validators.pattern('[- +()0-9]+')],


    correo: ['', [Validators.required, Validators.email]],

  });

  get validateNotary() {
    return this.formNotary.controls;
  }

  ngOnInit(): void {

    if (this.notary) {
      this.actionBtn = "Actualizar";
      this.formNotary.patchValue(this.notary)

    }
  }

  register(): void {
    const data = this.formNotary.value;
    if (this.actionBtn == "Guardar") {
      this.service.register(data).subscribe(data => {
        this.windowRef.close();
      }, err => {
        console.log(err);
      })
    } else {
      this.service.update(this.notary.id, data).subscribe(data => {
        this.windowRef.close();
      }, err => {
        console.log(err);
      })
    }
  }

}
