import { Component, OnInit } from '@angular/core';   
import { NbMenuService } from '@nebular/theme'; 

@Component({
  selector: 'ngx-re-doc-iss-auth-list',
  templateUrl: './re-doc-iss-auth-list.component.html',
  styleUrls: ['./re-doc-iss-auth-list.component.scss']
})
export class ReDocIssAuthListComponent  {delegacionesList = [
  {noDelegation: 1, delegation: 'Delegación Tijuana', },
  {noDelegation: 2, delegation: 'Delegación Vallarta', },
  {noDelegation: 3, delegation: 'Delegación Oaxaca',  },
  {noDelegation: 4, delegation: 'Delegación Veracruz', },
  {noDelegation: 5, delegation: 'Delegación Sinaloa', }
];
  selectedDelegationID: number;



  subDelegacionesList = [
    {noSubDelegation: 1, subDelegation: "Tijuana" },
    {noSubDelegation: 2, subDelegation: "Vallarta" },
    {noSubDelegation: 3, subDelegation: "Tijuana" },
    {noSubDelegation: 4, subDelegation: "Oaxaca" },
    {noSubDelegation: 5, subDelegation: "Sinaloa" }
  ];
    selectedSubDelegationID: number;
}
