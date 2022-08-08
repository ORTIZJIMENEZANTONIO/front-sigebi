import { Component, OnInit } from '@angular/core';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowControlButtonsConfig, NbWindowService } from '@nebular/theme';
import { TypeDoctoService } from '../../../../@core/backend/common/services/typeDocto.service';
import { BasePage } from '../../../../@core/shared/base-page';
import { TypeDoctoDetailComponent } from '../type-docto-detail/type-docto-detail.component';

@Component({
  selector: 'ngx-type-docto-list',
  templateUrl: './type-docto-list.component.html',
  styleUrls: ['./type-docto-list.component.scss']
})
export class TypeDoctoListComponent extends BasePage {

  constructor(private service: TypeDoctoService, public toastrService: NbToastrService,
    private windowService: NbWindowService, private paginator: MatPaginatorIntl) {
    super(toastrService);
    this.paginator.itemsPerPageLabel = "Registros por página";
  }

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent = {
    pageIndex:0,
    pageSize:10,
    length:100
  };

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
  list: any;
  settings = {
    actions: {
      columnTitle: 'Acciones',
      add: true,
      edit: true,
      delete: true,
    },
    pager : {
      display : false,
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
        title: 'Registro',
        type: 'number',
      },
      description: {
        title: 'Descripción',
        type: 'string',
      },
      version: {
        title: 'Versión',
        type: 'number',
      },
      estatus: {
        title: 'Estado',
        type: 'number',
      },
    
    },
    noDataMessage: "No se encontrarón registros"
  };

  ngOnInit(): void {
    this.read(0,10); 
  }

  read = ((pageIndex:number, pageSize:number) => {
    this.list = null;
    this.service.list(pageIndex, pageSize).subscribe((dt:any) =>  {
      this.list = dt.data;
      this.length = dt.count;
    }, 
    error => this.onLoadFailed('danger','Error conexión',error.message)
    );

  });

  changesPage (event){
    if(event.pageSize!=this.pageSize){

    }
    this.pageEvent = event;
    this.read(event.pageIndex * event.pageSize, event.pageSize)
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.service.delete(event.data.id).subscribe(data =>{
        console.log(data);
        if(data.statusCode == 200){
          this.onLoadFailed('success','Eliminado',data.message);
        }else{
          this.onLoadFailed('danger','Error',data.message);
        }
        this.read(this.pageEvent.pageIndex, this.pageEvent.pageSize);
      },err =>{
      })
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
    const modalRef = this.windowService.open(TypeDoctoDetailComponent, { title: `Editar`, context: { data: event.data }, buttons: buttonsConfig  }).onClose.subscribe(() => {
      this.read(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });
  
  }

  openWindow() {
    const modalRef = this.windowService.open(TypeDoctoDetailComponent, { title: `Nuevo` }).onClose.subscribe(() => {
      this.read(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });
    
  }

}
