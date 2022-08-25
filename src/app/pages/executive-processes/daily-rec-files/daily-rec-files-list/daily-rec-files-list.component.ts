import { Component, OnInit } from '@angular/core';
import { NbMenuService } from '@nebular/theme';

@Component({
  selector: 'ngx-daily-rec-files-list',
  templateUrl: './daily-rec-files-list.component.html',
  styleUrls: ['./daily-rec-files-list.component.scss']
})
export class DailyRecFilesListComponent {

  constructor(private menuService: NbMenuService) {
  }

  goToHome() {
    this.menuService.navigateHome();
  }
}


