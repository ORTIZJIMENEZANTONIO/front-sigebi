import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { BehaviorSubject } from 'rxjs';
import { NUMBERS_PATTERN, PHONE_PATTERN, STRING_PATTERN } from '../../../../@components/constants';
import { CityService } from '../../../../@core/backend/common/services/city.service';
import { IssuingInstitutionService } from '../../../../@core/backend/common/services/issuing-institution.service';
import { TransferentesService } from '../../../../@core/backend/common/services/transferentes.service';
import { IssuingInstitution } from '../../../../@core/interfaces/auction/issuing-institution.model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-issuing-institution-detail',
  templateUrl: './issuing-institution-detail.component.html',
  styleUrls: ['./issuing-institution-detail.component.scss']
})
export class IssuingInstitutionDetailComponent extends BasePage {


  issuingInstitution: IssuingInstitution;
  public cities$: BehaviorSubject<any[]> = new BehaviorSubject([]);
  public transferentes$ : BehaviorSubject<any[]> = new BehaviorSubject([]);


  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: IssuingInstitutionService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer, private windowService: NbWindowService, private cityService: CityService,
    private transferenceService: TransferentesService) {
    super();
    if (null != context.issuingInstitution) {
      this.issuingInstitution = context.issuingInstitution;
    }
    this.searchCity("")
    this.form.controls['city'].valueChanges.subscribe((value: string) => {
      this.searchCity(value)
    })
    this.searchTransferentes("")
    this.form.controls['transference'].valueChanges.subscribe((value: string) => {
      this.searchTransferentes(value)
    })
  }
  actionBtn: string = "Guardar";

  form = this.fb.group({
    id: [''],

    name: ['', [Validators.required, Validators.pattern(STRING_PATTERN), Validators.maxLength(100)]],
    description: ['', [Validators.required, Validators.maxLength(100)]],
    manager: ['', [Validators.maxLength(100), Validators.pattern(STRING_PATTERN)]],
    street: ['', [Validators.maxLength(60)]],
    numInside: ['', [Validators.maxLength(10)]],
    numExterior: ['', [Validators.maxLength(10)]],
    cologne: ['', [Validators.maxLength(60), Validators.pattern(STRING_PATTERN)]],
    zipCode: ['', [Validators.maxLength(5), Validators.pattern(NUMBERS_PATTERN)]],
    delegMunic: ['', [Validators.pattern(STRING_PATTERN), Validators.maxLength(60)]],
    phone: ['', [Validators.maxLength(20), Validators.pattern(PHONE_PATTERN)]],
    numClasif: ['', [Validators.required, Validators.maxLength(5)]],
    city: [''],
    numCity: ['', [Validators.maxLength(10)]],
    numRegister: ['', Validators.required],
    transference: [''],
    numTransference: ['', [Validators.maxLength(5)]]
  });

  public get id() { return this.form.get('id'); }
  public get name() { return this.form.get('name'); }
  public get description() { return this.form.get('description'); }
  public get manager() { return this.form.get('manager'); }
  public get street() { return this.form.get('street'); }
  public get numInside() { return this.form.get('numInside'); }
  public get numExterior() { return this.form.get('numExterior'); }
  public get cologne() { return this.form.get('cologne'); }
  public get zipCode() { return this.form.get('zipCode'); }
  public get delegMunic() { return this.form.get('delegMunic'); }
  public get phone() { return this.form.get('phone'); }
  public get numClasif() { return this.form.get('numClasif'); }
  public get numCity() { return this.form.get('numCity'); }
  public get numRegister() { return this.form.get('numRegister'); }
  public get numTransference() { return this.form.get('numTransference'); }



  get validate() {
    return this.form.controls;
  }

  ngOnInit(): void {

    if (this.issuingInstitution) {
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.issuingInstitution)
      this.form.controls['numCity'].setValue(this.issuingInstitution.numCity['id'])
      this.form.controls['city'].setValue(this.issuingInstitution.numCity['name'])
      this.form.controls['numTransference'].setValue(this.issuingInstitution.numTransference['id'])
      this.form.controls['transference'].setValue(this.issuingInstitution.numTransference['description'])
    }
  }

  public searchCity(value:string){
    this.cityService.search(value).subscribe(data => {
      this.cities$.next(data);
    })
  }
  public searchTransferentes(value:string){
    this.transferenceService.search(value).subscribe(data => {
      this.transferentes$.next(data);
    })
  }

  public onSelectionChangeCity(event){
    if(event.id){
      this.form.controls['numCity'].setValue(event.id);
      this.form.controls['city'].setValue(event.name);
    }
        
  }
  public onSelectionChangeTransferentes(event){
    if(event.id){
      this.form.controls['numTransference'].setValue(event.id);
      this.form.controls['transference'].setValue(event.name);
    }
        
  }

  register(): void {
    const data = this.form.value;
    if (this.actionBtn == "Guardar") {
      this.service.register(data).subscribe(data => {
        this.windowRef.close();
      }, err => {
        console.log(err);
      })
    } else {
      this.service.update(this.issuingInstitution.id, data).subscribe(data => {
        this.windowRef.close();
      }, err => {
        console.log(err);
      })
    }
  }
}
