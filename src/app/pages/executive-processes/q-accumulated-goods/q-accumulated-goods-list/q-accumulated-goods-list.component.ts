import { Component, OnInit } from '@angular/core';   


@Component({
  selector: 'ngx-q-accumulated-goods-list',
  templateUrl: './q-accumulated-goods-list.component.html',
  styleUrls: ['./q-accumulated-goods-list.component.scss']
})
export class QAccumulatedGoodsListComponent  {
  
  listado = [
  {noDelegation: 1, delegation: 'Delegación Tijuana', noSubDelegation: 1, subDelegation: "Tijuana"},
  {noDelegation: 2, delegation: 'Delegación Vallarta', noSubDelegation: 2, subDelegation: "Vallarta"},
  {noDelegation: 3, delegation: 'Delegación Oaxaca', noSubDelegation: 3, subDelegation: "Tijuana" },
  {noDelegation: 4, delegation: 'Delegación Veracruz', noSubDelegation: 4, subDelegation: "Oaxaca"},
  {noDelegation: 5, delegation: 'Delegación Sinaloa', noSubDelegation: 5, subDelegation: "Sinaloa"}
];


  selectedDelegationID: number;
  


}

