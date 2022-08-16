import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { BehaviorSubject } from 'rxjs';
import { SatClassificationService } from '../../../../@core/backend/common/services/sat-classification.service';
import { SatSubclasificationService } from '../../../../@core/backend/common/services/sat-subclasification.service';
import { SatSubclasification } from '../../../../@core/interfaces/auction/sat-subclasification.model';
import { BaseApp } from '../../../../@core/shared/base-app';

@Component({
  selector: 'ngx-sat-subclasification-detail',
  templateUrl: './sat-subclasification-detail.component.html',
  styleUrls: ['./sat-subclasification-detail.component.scss']
})
export class SatSubclasificationDetailComponent extends BaseApp implements OnInit {
  Form: FormGroup;
  data: SatSubclasification;
  filteredOptions$: BehaviorSubject<any[]> = new BehaviorSubject([]);
  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router,
    private service: SatSubclasificationService, private subService: SatClassificationService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer, private windowService: NbWindowService) {
    super();
    if (null != context.data) {
      this.data = context.data;
    }
    this.form.controls['nombre_clasificacion'].valueChanges.subscribe((value: string) => {
      if (value) {
        this.subService.search(value).subscribe(data => {
          this.filteredOptions$.next(data);
        })
      }
    })
  }
  actionBtn: string = "Guardar";

  form = this.fb.group({
    id: [null],
    nameSubClasification: [null, Validators.compose([Validators.pattern("")])],
    idClasification: [0, [Validators.required]],
    nombre_clasificacion: ['', Validators.required]
  });

  get validateSubclasification() {
    return this.form.controls;
  }
  ngOnInit(): void {
    if (this.data) {
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.data);
    }

  }
  public onSelectionChangeDelegation(event) {
    if (event.id) {
      this.idClasification.patchValue(event.id);
      this.nombre_clasificacion.patchValue(event.nombre_clasificacion);
    }
  }

  public get idClasification() {
    return this.form.get('idClasification');
  }
  public get nombre_clasificacion() {
    return this.form.get('nombre_clasificacion');
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
