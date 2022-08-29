import { Component, OnInit } from '@angular/core';
import { NbMenuService } from '@nebular/theme';

@Component({
  selector: 'ngx-re-docs-x-sera-list',
  templateUrl: './re-docs-x-sera-list.component.html',
  styleUrls: ['./re-docs-x-sera-list.component.scss']
})
export class ReDocsXSeraListComponent  {

  constructor(private menuService: NbMenuService) {
  }

  goToHome() {
    this.menuService.navigateHome();
  }

}
