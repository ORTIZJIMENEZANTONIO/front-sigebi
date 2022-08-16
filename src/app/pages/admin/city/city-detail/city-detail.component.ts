import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

import { Router } from '@angular/router';
import { NbWindowRef, NbWindowService, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { BehaviorSubject, Observable } from 'rxjs';
import { CityService } from '../../../../@core/backend/common/services/city.service';
import { DelegationService } from '../../../../@core/backend/common/services/delegation.service';
import { SubdelegationService } from '../../../../@core/backend/common/services/subdelegation.service';
import { City } from '../../../../@core/interfaces/auction/City.model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.scss']
 
})
export class CityDetailComponent extends BasePage {


  city: City;
  formCity: FormGroup;

  filteredOptions$: BehaviorSubject<any[]> = new BehaviorSubject([]);
  filteredsubdelegations$: BehaviorSubject<any[]> = new BehaviorSubject([]);
  
  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: CityService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer, private windowService: NbWindowService,
    private delegationService: DelegationService,
    private subDelegationService: SubdelegationService

  ) {
    super();
    if (null != context.city) {
      this.city = context.city;
    }


    this.formCity = this.fb.group({
      id: [''],
      name: [null, Validators.compose([Validators.pattern("[a-zA-Z]((\.|_|-)?[a-zA-ZáéíóúÁÉÍÓÚ\u0020]+){0,255}"), Validators.required])],
      cityCode: ['', Validators.required],
      detailDelegation:[null,Validators.required],
      numDelegation: [null, [Validators.min(1)]],
      detailSubDelegation:[null,Validators.required],
      numSubDelegation: [null, [Validators.min(1)]],
      legendOffice: [null, [Validators.required]],
      numRegister: [null, [Validators.required]],
    });
    this.formCity.controls['detailDelegation'].valueChanges.subscribe((value: string) => {
      if (value) {
        this.delegationService.search(value).subscribe(data => {
          this.filteredOptions$.next(data);
        })
      }
    })
    this.formCity.controls['detailSubDelegation'].valueChanges.subscribe((value: string) => {
      if (value) {
        this.subDelegationService.search(value).subscribe(data => {
          this.filteredsubdelegations$.next(data);
        })
      }
    })

  }
  actionBtn: string = "Guardar";



  get validateCity() {
    return this.formCity.controls;
  }

  ngOnInit(): void {

    if (this.city) {
      this.actionBtn = "Actualizar";
      this.formCity.patchValue(this.city)
      this.formCity.controls['numDelegation'].setValue(this.city.numDelegation['id'])
      this.formCity.controls['detailDelegation'].setValue(this.city.numDelegation['description'])
      this.formCity.controls['numSubDelegation'].setValue(this.city.numSubDelegation['id'])
      this.formCity.controls['detailSubDelegation'].setValue(this.city.numSubDelegation['description'])
      
      console.log(this.city);
      
    }
  }

  onSelectionChangeDelegation(event){
    if(event.id){
      this.formCity.controls['numDelegation'].setValue(event.id);
      this.formCity.controls['detailDelegation'].setValue(event.description);
    }
        
  }
  onSelectionChangeSubdelegation(event){
    if(event.id){
      this.formCity.controls['numSubDelegation'].setValue(event.id);
      this.formCity.controls['detailSubDelegation'].setValue(event.description);
    }
    
  }

  


  
  register(): void {
    const data = this.formCity.value;
    if (this.actionBtn == "Guardar") {

      
      this.service.register(data).subscribe(data => {
        this.windowRef.close();
      }, err => {
        console.log(err);
      })
    } else {
      console.log(data);

      this.service.update(this.city.id, data).subscribe(data => {
        this.windowRef.close();
      }, err => {
        console.log(err);
      })
    }
  }
}
