import { Component, OnInit } from '@angular/core'; 
import { NbMenuService } from '@nebular/theme';

@Component({
  selector: 'ngx-a-accumulated-assets-list',
  templateUrl: './a-accumulated-assets-list.component.html',
  styleUrls: ['./a-accumulated-assets-list.component.scss']
})
export class AAccumulatedAssetsListComponent {
  
  constructor(private menuService: NbMenuService) {
  }

  goToHome() {
    this.menuService.navigateHome();
  }

}
