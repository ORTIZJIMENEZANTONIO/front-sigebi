import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { DomSanitizer } from '@angular/platform-browser';
import { BasePage } from '../../../../@core/shared/base-page';
import { FractionsModel } from '../../../../@core/interfaces/auction/fractions.model';
import { FractionsService } from '../../../../@core/backend/common/services/fractions.service';
import { NormService } from '../../../../@core/backend/common/services/norm.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'ngx-fractions-detail',
  templateUrl: './fractions-detail.component.html',
  styleUrls: ['./fractions-detail.component.scss']
})
export class FractionsDetailComponent extends BasePage {
  fraction:FractionsModel;
  formFraction: FormGroup;
  
  filteredOptions$: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: FractionsService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer,  private windowService: NbWindowService, private normService :NormService) { 
      super();
      if (null != context.fraction){
        this.fraction = context.fraction;
      }

      
    this.formFraction = this.fb.group({
      code: [null, Validators.compose([Validators.required])],
      level: [null, Validators.compose([Validators.required])],
      description: [null, Validators.compose([Validators.required])],
      parentId: [null, Validators.compose([Validators.pattern("[0-9]{0,255}"),Validators.required])],
      normId: [null, Validators.compose([Validators.pattern("[0-9]{0,255}"),Validators.required])],
      normDetalle: [null, Validators.compose([Validators.required])],
      unit: [null, Validators.compose([Validators.required])],
      clasificationId: [null, Validators.compose([Validators.pattern("[0-9]{0,255}"),Validators.required])],
      relevantTypeId: [null, Validators.compose([Validators.pattern("[0-9]{0,255}"),Validators.required])],
      version: [null, Validators.compose([Validators.pattern("^([0-9]+)+([.][0-9]+)+([.][0-9]+)?$"),Validators.required])],
      codeErp1: [null, Validators.compose([Validators.pattern("[a-z-A-Z]{0,30}"),Validators.required])],
      codeErp2: [null, Validators.compose([Validators.pattern("[a-z-A-Z]{0,30}"),Validators.required])],
      codeErp3: [null, Validators.compose([Validators.pattern("[a-z-A-Z]{0,30}"),Validators.required])],
      decimalAmount: [null, Validators.compose([Validators.pattern("[a-z-A-Z]{0,1}"),Validators.required])],
      status: [null, Validators.compose([Validators.required])],
      fractionCode: [null, Validators.compose([Validators.pattern("[0-9]{1,255}"),Validators.required])],
    });
    this.formFraction.controls['normDetalle'].valueChanges.subscribe((value: string) => {
      if (value) {
        this.normService.search(value).subscribe(data => {
          this.filteredOptions$.next(data);
        })
      }
    })
    }
    actionBtn : string = "Guardar";
  
    get validateFraction(){
      return this.formFraction.controls;
    }
    get validateNorm() {
      return this.formFraction.controls;
    }
  
    
  ngOnInit(): void {
    if(this.fraction){
      this.actionBtn = "Actualizar";
      this.formFraction.patchValue(this.fraction)
      this.formFraction.controls['normId'].setValue(this.fraction.normId['id'])
      this.formFraction.controls['normDetalle'].setValue(this.fraction.normId['norm'])
    }else{
      this.formFraction.controls['parentId'].setValue(0)
    }
    
  }

  onSelectionChangeNorm(event){
    if(event.id){
      this.formFraction.controls['normId'].setValue(event.id);
      this.formFraction.controls['normDetalle'].setValue(event.norm);
    }
        
  }

  register(): void {
    const data = this.formFraction.value;
    data.modificationDate = Date();
    if( this.actionBtn == "Guardar"){

      data.userCreation ="Rafael";
      data.userModification = "Antonio";
      data.creationDate = Date();

      this.service.register(data).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }else{
      this.service.update(this.fraction.id,data).subscribe(data =>{
        this.windowRef.close();
      },err =>{
        console.log(err);
      })
    }
  }
}
