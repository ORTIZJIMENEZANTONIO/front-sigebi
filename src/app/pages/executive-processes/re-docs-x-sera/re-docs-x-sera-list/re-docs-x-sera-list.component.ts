import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-re-docs-x-sera-list',
  templateUrl: './re-docs-x-sera-list.component.html',
  styleUrls: ['./re-docs-x-sera-list.component.scss']
})
export class ReDocsXSeraListComponent  {

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
      nomDeleg: ['', [Validators.required]],
      nomSubDel: ['', [Validators.required]],
    });}

  public get fechaInicial() { return this.formDelegation.get('fechaInicial'); }
  public get fechaFinal() { return this.formDelegation.get('fechaFinal'); }
  public get nomDeleg() { return this.formDelegation.get('nomDeleg'); }
  public get nomSubDel() { return this.formDelegation.get('nomSubDel'); }

mostrarInfo(): any{
  console.log(this.formDelegation.value)
}

}
