import { Component, OnInit } from '@angular/core';  


@Component({
  selector: 'ngx-assets-rec-admin-list',
  templateUrl: './assets-rec-admin-list.component.html',
  styleUrls: ['./assets-rec-admin-list.component.scss']
})
export class AssetsRecAdminListComponent  {

  delegacionesList = [
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

    statusList = [
        {cveStatus: "ASEGU", status: "ASEGURADO" },
        {cveStatus: "NOASEGU", status: "NO ASEGURADO" },
            ]
    noStatus: string;
}
