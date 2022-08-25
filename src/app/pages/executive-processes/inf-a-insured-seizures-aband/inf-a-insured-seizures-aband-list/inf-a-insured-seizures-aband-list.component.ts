import { Component, OnInit } from '@angular/core';
import { NbMenuService } from '@nebular/theme';

@Component({ 
  selector: 'ngx-inf-a-insured-seizures-aband-list',
  templateUrl: './inf-a-insured-seizures-aband-list.component.html',
  styleUrls: ['./inf-a-insured-seizures-aband-list.component.scss']
})
export class InfAInsuredSeizuresAbandListComponent  {

  constructor(private menuService: NbMenuService) {
  }

  goToHome() {
    this.menuService.navigateHome();
  }

}
