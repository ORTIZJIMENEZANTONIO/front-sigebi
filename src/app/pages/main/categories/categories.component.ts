import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Params} from "@angular/router";
import { ImageCategoryService } from '../../../@core/backend/common/services/image-category.service';
import { CategoryModel } from '../../../@core/interfaces/auction/category.model';
import { DomSanitizer } from '@angular/platform-browser';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrService } from '@nebular/theme';
//import { ImageCategoryData } from '../../../@core/interfaces/auction/FetchedSubCategories';

@Component({
  selector: 'app-home-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: any;

  //message toast
  index = 1;
  destroyByClick = true;
  duration = 2000;
  hasIcon = true;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates = false;
  status: NbComponentStatus = 'primary';
  statusError: NbComponentStatus = 'danger';
  
  constructor(private service: ImageCategoryService, private dom: DomSanitizer, private toastrService: NbToastrService) { }
  params:Params ={}
  //state$:Observable<MainPageState>;
  ngOnInit() {
    //this.store.dispatch(new FetchCategoriesImages());
    //this.state$ = this.store.select('mainPage');
    this.categoriesWithImage();
  }

  categoriesWithImage(){
    this.categories = null;
    this.service.list(1,10).subscribe(categories => {
      //console.log("Goods::" + JSON.stringify(categories));
      /*
      //this.addlog("Subastas",data,true);
      console.log("Goods::" + JSON.stringify(data));
      var count = Object.keys(data).length;
      if (count > 0) {
        this.categories = data;
      }
      */
      let cat: CategoryModel[] = [];
      for (let category of categories) {
        let newCategory = new CategoryModel(category.name, category.id,category.deleted, null);
        /*
        let uints = new Uint8Array(category.image);
        let stringchar = String.fromCharCode.apply(null, uints);
        let base64 = btoa(stringchar);
        NewCategory.imageUrl = base64;
        */
        newCategory.imageUrl = category.picture;
        cat.push(newCategory);
      }
      //console.log("Categories:::" + JSON.stringify(cat));
      this.categories=cat;
    }, error => this.onLoadFailed(error));
  }

  protected onLoadFailed(error: any): void {
    //console.log("ERROR:::" + JSON.stringify(error));
    this.showToast(this.statusError, 'Error', error.message);
  }

  private showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      hasIcon: this.hasIcon,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
    };
    //const titleContent = title ? `. ${title}` : '';
    const titleContent = title ? `${title}` : '';

    this.index += 1;
    this.toastrService.show(
      body,
      //`Toast ${this.index}${titleContent}`,
      `${titleContent}`,
      config);
  }
}
