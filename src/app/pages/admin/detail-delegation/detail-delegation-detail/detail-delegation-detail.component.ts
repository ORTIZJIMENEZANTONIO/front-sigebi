import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { BehaviorSubject } from 'rxjs';
import { DelegationService } from '../../../../@core/backend/common/services/delegation.service';
import { DetailDelegationService } from '../../../../@core/backend/common/services/detail-delegation.service';
import { SubdelegationService } from '../../../../@core/backend/common/services/subdelegation.service';
import { DetailDelegation } from '../../../../@core/interfaces/auction/detail-delegation.model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-detail-delegation-detail',
  templateUrl: './detail-delegation-detail.component.html',
  styleUrls: ['./detail-delegation-detail.component.scss']
})
export class DetailDelegationDetailComponent extends BasePage {

  detailDelegation: DetailDelegation;
  formDetailDelegation: FormGroup;

  filteredOptions$: BehaviorSubject<any[]> = new BehaviorSubject([]);
  filteredsubdelegations$: BehaviorSubject<any[]> = new BehaviorSubject([]);
  
  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: DetailDelegationService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer, private windowService: NbWindowService,
    private delegationService: DelegationService,

  ) {
    super();
    if (null != context.detailDelegation) {
      
      this.detailDelegation = context.detailDelegation;
    }


    this.formDetailDelegation = this.fb.group({
      id: [''],
      nombre: [null, Validators.compose([Validators.pattern("[a-zA-Z]((\.|_|-)?[a-zA-ZáéíóúÁÉÍÓÚ\u0020]+){0,255}"), Validators.required])],
      ubicacion: ['', Validators.required],
      direccion: ['', Validators.required],
      puesto: ['', Validators.required],
      area: ['', Validators.required],
      correo: ['', Validators.email],

      tel1: ['', Validators.required],
      tel2: ['', Validators.required],
      tel3: ['', Validators.required],

      detalle_delegacion:[null,Validators.required],
      no_delegacion: [null, [Validators.min(1)]],
    });
    this.formDetailDelegation.controls['detalle_delegacion'].valueChanges.subscribe((value: string) => {
      if (value) {
        this.delegationService.search(value).subscribe(data => {
          this.filteredOptions$.next(data);
        })
      }
    })
  }
  actionBtn: string = "Guardar";



  get validateDetailDelegation() {
    return this.formDetailDelegation.controls;
  }

  ngOnInit(): void {

    if (this.detailDelegation) {
      this.actionBtn = "Actualizar";
      this.formDetailDelegation.patchValue(this.detailDelegation)

    }
  }

  onSelectionChangeDelegation(event){
    if(event.id){
      this.formDetailDelegation.controls['no_delegacion'].setValue(event.id);
      this.formDetailDelegation.controls['detalle_delegacion'].setValue(event.descripcion);
    }
        
  }

  


  
  register(): void {
    const data = this.formDetailDelegation.value;
    if (this.actionBtn == "Guardar") {
      this.service.register(data).subscribe(data => {
        this.windowRef.close();
      }, err => {
        console.log(err);
      })
    } else {
      this.service.update(this.detailDelegation.id, data).subscribe(data => {
        this.windowRef.close();
      }, err => {
        console.log(err);
      })
    }
  }
}
