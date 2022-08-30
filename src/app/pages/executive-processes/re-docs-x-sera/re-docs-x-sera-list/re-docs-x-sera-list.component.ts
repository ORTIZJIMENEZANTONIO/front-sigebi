import { Component, OnInit } from '@angular/core';
import { NbMenuService } from '@nebular/theme';

@Component({
  selector: 'ngx-re-docs-x-sera-list',
  templateUrl: './re-docs-x-sera-list.component.html',
  styleUrls: ['./re-docs-x-sera-list.component.scss']
})
export class ReDocsXSeraListComponent  {

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

    areaList = [
        {noArea: 1, areaClave: "DGAAAYS" },
        {noArea: 2, areaClave: "SDVNYOA" },
        {noArea: 3, areaClave: "DAB" },
        {noArea: 4, areaClave: "RED" },
        {noArea: 5, areaClave: "JUR" }
      ];
      areaID: number;

    coordinacionList = [
        {noCoordinacion: "Cancun", coordinacion: "COORD. DE Cancun " },
        {noCoordinacion: "Puebla", coordinacion: "COORD. DE Puebla " },
        {noCoordinacion: "CDMX", coordinacion: "COORD. DE CDMX " },
        {noCoordinacion: "Tlaxcala", coordinacion: "COORD. DE Tlaxcala " },
        {noCoordinacion: "Guerrero", coordinacion: "COORD. DE Guerrero " }
    ]
    noCoor: string;
}
