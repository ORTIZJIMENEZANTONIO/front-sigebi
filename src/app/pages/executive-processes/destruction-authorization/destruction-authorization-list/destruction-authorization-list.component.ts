import { Component, OnInit } from '@angular/core';
import { NbMenuService } from '@nebular/theme';

@Component({ 
  selector: 'ngx-destruction-authorization-list',
  templateUrl: './destruction-authorization-list.component.html',
  styleUrls: ['./destruction-authorization-list.component.scss']
})
export class DestructionAuthorizationListComponent {
  
  constructor(private menuService: NbMenuService) {
  }

  goToHome() {
    this.menuService.navigateHome();
  }

}
