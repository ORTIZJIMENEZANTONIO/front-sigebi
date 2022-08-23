import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { GoodsSubtypeService } from '../../../../@core/backend/common/services/goods-subtype.service';
import { GoodsSubtype } from '../../../../@core/interfaces/auction/goods-subtype.model';
import { BaseApp } from '../../../../@core/shared/base-app';

@Component({
  selector: 'ngx-goods-subtype-detail',
  templateUrl: './goods-subtype-detail.component.html',
  styleUrls: ['./goods-subtype-detail.component.scss']
})
export class GoodsSubtypeDetailComponent extends BaseApp implements OnInit {

  Form: FormGroup;
  data: GoodsSubtype;

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: GoodsSubtypeService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer, private windowService: NbWindowService) {
    super();
    if (null != context.data) {
      this.data = context.data;
    }
  }
  actionBtn: string = "Guardar";

  form = this.fb.group({
    id: [null],
    nameGoodSubtype: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(50)])],
    numberPhotographs: [null, Validators.compose([Validators.pattern("")])],
    descFotographs: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(500)])],
    version: [null, Validators.compose([Validators.pattern("^([0-9]+)+([.][0-9]+)+([.][0-9]+)?$"), Validators.required])],
  });

  get validateGoodsSubtype() {
    return this.form.controls;
  }
  ngOnInit(): void {
    if (this.data) {
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
