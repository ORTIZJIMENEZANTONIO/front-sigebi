import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

import { Router } from '@angular/router';
import { NbWindowRef, NbWindowService, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { MatSelectSearchOptions, MAT_SELECTSEARCH_DEFAULT_OPTIONS } from 'ngx-mat-select-search';
import { BehaviorSubject, Observable } from 'rxjs';
import { CityService } from '../../../../@core/backend/common/services/city.service';
import { DelegationService } from '../../../../@core/backend/common/services/delegation.service';
import { SubdelegationService } from '../../../../@core/backend/common/services/subdelegation.service';
import { City } from '../../../../@core/interfaces/auction/City.model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.scss'],
  providers: [
    {
      provide: MAT_SELECTSEARCH_DEFAULT_OPTIONS,
      useValue: <MatSelectSearchOptions>{
        closeIcon: 'delete',
        noEntriesFoundLabel: 'No options found',
      }
    }
  ]
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
      nombre: [null, Validators.compose([Validators.pattern("[a-zA-Z]((\.|_|-)?[a-zA-ZáéíóúÁÉÍÓÚ\u0020]+){0,255}"), Validators.required])],
      cve_entfed: ['', Validators.required],
      detalle_delegacion:[null,Validators.required],
      no_delegacion: [null, [Validators.min(1)]],
      detalle_subdelegacion:[null,Validators.required],
      no_subdelegacion: [null, [Validators.min(1)]],
      leyenda_oficio: [null, [Validators.required]],
      no_registro: [null, [Validators.required]],
    });
    this.formCity.controls['detalle_delegacion'].valueChanges.subscribe((value: string) => {
      if (value) {
        this.delegationService.search(value).subscribe(data => {
          this.filteredOptions$.next(data);
        })
      }
    })
    this.formCity.controls['detalle_subdelegacion'].valueChanges.subscribe((value: string) => {
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
      this.formCity.controls['no_delegacion'].setValue(this.city.no_delegacion['id'])
      this.formCity.controls['detalle_delegacion'].setValue(this.city.no_delegacion['descripcion'])
      this.formCity.controls['no_subdelegacion'].setValue(this.city.no_subdelegacion['id'])
      this.formCity.controls['detalle_subdelegacion'].setValue(this.city.no_subdelegacion['descripcion'])
      
      console.log(this.city);
      
    }
  }

  onSelectionChangeDelegation(event){
    if(event.id){
      this.formCity.controls['no_delegacion'].setValue(event.id);
      this.formCity.controls['detalle_delegacion'].setValue(event.descripcion);
    }
        
  }
  onSelectionChangeSubdelegation(event){
    if(event.id){
      this.formCity.controls['no_subdelegacion'].setValue(event.id);
      this.formCity.controls['detalle_subdelegacion'].setValue(event.descripcion);
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
