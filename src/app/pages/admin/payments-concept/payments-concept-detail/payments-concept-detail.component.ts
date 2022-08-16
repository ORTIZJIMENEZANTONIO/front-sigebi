import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { BehaviorSubject } from 'rxjs';
import { DelegationService } from '../../../../@core/backend/common/services/delegation.service';
import { PaymentsConceptService } from '../../../../@core/backend/common/services/payments-concept.service';
import { SubdelegationService } from '../../../../@core/backend/common/services/subdelegation.service';
import { PaymentsConcept } from '../../../../@core/interfaces/auction/payments-concept.model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-payments-concept-detail',
  templateUrl: './payments-concept-detail.component.html',
  styleUrls: ['./payments-concept-detail.component.scss']
})
export class PaymentsConceptDetailComponent extends BasePage {

  paymentsConcept: PaymentsConcept;
  formPaymentsConcept: FormGroup;

  filteredOptions$: BehaviorSubject<any[]> = new BehaviorSubject([]);
  filteredsubdelegations$: BehaviorSubject<any[]> = new BehaviorSubject([]);
  
  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: PaymentsConceptService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer, private windowService: NbWindowService,

  ) {
    super();
    if (null != context.paymentsConcept) {
      this.paymentsConcept = context.paymentsConcept;
    }


    this.formPaymentsConcept = this.fb.group({
      id: [''],
      description: [null,  Validators.required],
      numRegister: [null, [Validators.min(1)]],
    });
  
  }
  actionBtn: string = "Guardar";



  get validatePaymentsConcept() {
    return this.formPaymentsConcept.controls;
  }

  ngOnInit(): void {

    if (this.paymentsConcept) {
      this.actionBtn = "Actualizar";
      this.formPaymentsConcept.patchValue(this.paymentsConcept)

    }
  }
  
  register(): void {
    const data = this.formPaymentsConcept.value;
    data.modificationDate = Date();
    if (this.actionBtn == "Guardar") {

      data.userCreation = "Rafael";
      data.userModification = "Antonio";
      data.creationDate = Date();

      this.service.register(data).subscribe(data => {
        this.windowRef.close();
      }, err => {
        console.log(err);
      })
    } else {
      this.service.update(this.paymentsConcept.id, data).subscribe(data => {
        this.windowRef.close();
      }, err => {
        console.log(err);
      })
    }
  }
}
