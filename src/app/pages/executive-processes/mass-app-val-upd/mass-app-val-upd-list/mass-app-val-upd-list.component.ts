import { Component, OnInit } from '@angular/core';
import { NbMenuService } from '@nebular/theme';

@Component({
  selector: 'ngx-mass-app-val-upd-list',
  templateUrl: './mass-app-val-upd-list.component.html',
  styleUrls: ['./mass-app-val-upd-list.component.scss']
})
export class MassAppValUpdListComponent {

  constructor(private menuService: NbMenuService) {
  }

  goToHome() {
    this.menuService.navigateHome();
  }
}
