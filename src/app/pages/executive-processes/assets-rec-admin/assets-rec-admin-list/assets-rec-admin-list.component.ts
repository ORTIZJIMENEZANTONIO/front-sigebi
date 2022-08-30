import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'ngx-assets-rec-admin-list',
  templateUrl: './assets-rec-admin-list.component.html',
  styleUrls: ['./assets-rec-admin-list.component.scss']
})
export class AssetsRecAdminListComponent  {

  cities = [
    {id: 1, name: 'Tijuana'},
    {id: 2, name: 'Vallarta'},
    {id: 3, name: 'Oaxaca', disabled: true},
    {id: 4, name: 'Veracruz'},
    {id: 5, name: 'Sinaloa'}
];


    selectedCity: any;
    selectedCityIds: string[];
    selectedCityName = 'Vilnius';
    selectedCityId: number;
    selectedUserIds: number[];


}
