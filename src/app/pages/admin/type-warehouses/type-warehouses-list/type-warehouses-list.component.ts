import { Component, OnInit } from '@angular/core';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowControlButtonsConfig, NbWindowService } from '@nebular/theme';
import { TypeWarehouseService } from '../../../../@core/backend/common/services/typeWarehouses.service';
import { BasePage } from '../../../../@core/shared/base-page';
import { TypeWarehousesDetailComponent } from '../type-warehouses-detail/type-warehouses-detail.component';

@Component({
  selector: 'ngx-type-warehouses-list',
  templateUrl: './type-warehouses-list.component.html',
  styleUrls: ['./type-warehouses-list.component.scss']
})
export class TypeWarehousesListComponent extends BasePage {
  constructor(private service: TypeWarehouseService, public toastrService: NbToastrService,
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
        //editable: false,
        // width: '25px'
      },
      description: {
        title: 'Descripción',
        type: 'string',
        editable: true,
      },
      version: {
        title: 'Versión',
        type: 'number',
      },
      estatus: {
        title: 'Estatus',
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
      console.log(dt)
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
        console.log(err);
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
    console.log(event.data);
    const modalRef = this.windowService.open(TypeWarehousesDetailComponent, { title: `Editar dictamen`, context: { data: event.data }, buttons: buttonsConfig  }).onClose.subscribe(() => {
      this.read(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });
  
  }

  openWindowDictamen() {
    const modalRef = this.windowService.open(TypeWarehousesDetailComponent, { title: `Nuevo dictamen` }).onClose.subscribe(() => {
      this.read(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });
    
  }

}
