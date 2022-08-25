import { Component, OnInit } from '@angular/core';
import { NbMenuService } from '@nebular/theme';

@Component({
  selector: 'ngx-doc-re-des-area-list',
  templateUrl: './doc-re-des-area-list.component.html',
  styleUrls: ['./doc-re-des-area-list.component.scss']
})
export class DocReDesAreaListComponent  {

  constructor(private menuService: NbMenuService) {
  }

  goToHome() {
    this.menuService.navigateHome();
  }

}
