import { Component, OnInit } from '@angular/core';
import { NbComponentStatus, NbToastrService, NbWindowControlButtonsConfig, NbWindowService } from '@nebular/theme';
import { CategoryService } from '../../../../@core/backend/common/services/category.service';
import { CategoryModel } from '../../../../@core/interfaces/auction/category.model';
import { BasePage } from '../../../../@core/shared/base-page';
import { CategoryDetailComponent } from '../category-detail/category-detail.component';

@Component({
  selector: 'ngx-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent extends BasePage {

  categories: any;

  //statusError: NbComponentStatus = 'danger';

  settings = {
    actions: {
      columnTitle: 'Acciones',
      add: true,
      edit: true,
      delete: true,
    },
    hideSubHeader: true,//oculta subheaader de filtro
    mode: 'external', // ventana externa
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'Id',
        type: 'number',
        //editable: false,
        width: '25px'
      },
      name: {
        title: 'Nombre',
        type: 'string',
        //editable: false,
      },
      imageUrl: {
        title: 'Foto',
        type: 'html',
        //editable: false,
        valuePrepareFunction: (value) => { return `<img class='cat-img-top cat-img-fluid cat_image' src="${value}" />`;},
        width: '150px'
      }
    },
  };


  constructor(private service: CategoryService, public toastrService: NbToastrService,
    private windowService: NbWindowService) {
    super(toastrService);
  }

  ngOnInit(): void {
    this.readCategories();
  }

  readCategories = (() => {
    this.categories = null;
    this.service.list().subscribe(categories => {
      //this.categories=categories;
        let cat: CategoryModel[] = [];
        for (let category of categories) {
          ///constructor(name: string, id: number, deleted:boolean,SubCategories?: SubCategoryModel[])
          let newCategory = new CategoryModel(category.name, category.id, category.deleted,null);
          //newCategory.imageUrl = "<img class='cat-img-top cat-img-fluid cat_image' src='" + category.picture+"'>";
          //newCategory.picture = category.picture;
          newCategory.imageUrl = category.picture;
          cat.push(newCategory);
        }
        //console.log("Categories:::" + JSON.stringify(cat));
        this.categories = cat;
    }, error => this.onLoadFailed('danger','Error conexión',error.message));

  });

  onDeleteConfirm(event): void {
    console.log("event::" + JSON.stringify(event.data));
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  editRow(event) {
    const buttonsConfig: NbWindowControlButtonsConfig = {
      minimize: false,
      maximize: false,
      fullScreen: false,
    };
    
    //console.log('edit event: ', JSON.stringify(event.data))
    const modalRef = this.windowService.open(CategoryDetailComponent, { title: `Nueva categoria`, context: { category: event.data }, buttons: buttonsConfig  }).onClose.subscribe(() => {
      console.log('Ventana cerrada');
      this.readCategories();
    });
  
  }

  openWindowCategory() {
    console.log('Open window: ')
    const modalRef = this.windowService.open(CategoryDetailComponent, { title: `Nueva categoria` }).onClose.subscribe(() => {
      console.log('Ventana cerrada');
      this.readCategories();
    });
    
  }
}