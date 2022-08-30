import { Component, OnInit } from '@angular/core'; 
import { NbMenuService } from '@nebular/theme';

@Component({
  selector: 'ngx-daily-rec-files-list',
  templateUrl: './daily-rec-files-list.component.html',
  styleUrls: ['./daily-rec-files-list.component.scss']
})
export class DailyRecFilesListComponent {

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

}


