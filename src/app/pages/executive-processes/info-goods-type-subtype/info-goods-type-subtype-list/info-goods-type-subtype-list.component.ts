import { Component, OnInit } from '@angular/core'; 
import { NbMenuService } from '@nebular/theme';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateHorizontalPosition } from '@angular/cdk/overlay';

@Component({
  selector: 'ngx-info-goods-type-subtype-list',
  templateUrl: './info-goods-type-subtype-list.component.html',
  styleUrls: ['./info-goods-type-subtype-list.component.scss']
})
export class InfoGoodsTypeSubtypeListComponent  {

  public formDelegation: FormGroup;

  constructor(
    private fb: FormBuilder) {  
  }

  ngOnInit(): void {
    this.prepareForm();
  }
  private prepareForm() {
    this.formDelegation = this.fb.group({
      fechaInicial: ['', [Validators.required]],
      fechaFinal: ['', [Validators.required]],
    });}

  public get fechaInicial() { return this.formDelegation.get('fechaInicial'); }
  public get fechaFinal() { return this.formDelegation.get('fechaFinal'); }


mostrarInfo(): any{
  console.log(this.formDelegation.value)
}

}
