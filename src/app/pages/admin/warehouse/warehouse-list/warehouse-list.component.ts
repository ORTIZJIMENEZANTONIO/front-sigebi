import { Component } from '@angular/core';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowControlButtonsConfig, NbWindowService } from '@nebular/theme';
import { BasePage } from '../../../../@core/shared/base-page';

import { WarehouseDetailComponent } from '../warehouse-detail/warehouse-detail.component';
import { WarehouseService } from '../../../../@core/backend/common/services/warehouse.service';

@Component({
  selector: 'ngx-warehouse-list',
  templateUrl: './warehouse-list.component.html',
  styleUrls: ['./warehouse-list.component.scss']
})
export class WarehouseListComponent extends BasePage {

  constructor(
    private service: WarehouseService, 
    public  toastrService: NbToastrService,
    private windowService: NbWindowService, 
    private paginator: MatPaginatorIntl
  ) {
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

  warehouses: any;

  settings = {
    actions: {
      columnTitle: 'Acciones',
      add: true,
      edit: true,
      delete: false,
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
      idWarehouse: {
        title: 'Registro',
        type: 'string'
      },
      description: {
        title: 'Descripción',
        type: 'string',
      },
      ubication: {
        title: 'Ubicación',
        type: 'string'
      },
      manager: {
        title: 'Encargado',
        type: 'string'
      },
      registerNumber: {
        title: 'No. de registro',
        type: 'string'
      },
      stateCode: {
        title: 'Creado Estado',
        type: 'string',
      },
      cityCode: {
        title: 'Ciudad',
        type: 'string',
      },
      municipalityCode: {
        title: 'Municipio',
        type: 'string'
      },
      localityCode: {
        title: 'Localidad',
        type: 'string',
      },
      indActive: {
        title: 'Activo',
        type: 'string',
      },
      type: {
        title: 'Tipo',
        type: 'string',
      },
      responsibleDelegation: {
        title: 'Delegación reponsable',
        type: 'string',
      },
    },
    noDataMessage: "No se encontrarón registros"
  };

  ngOnInit(): void {
    this.readData(0,10);
  }
  
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput)
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  readData = ((pageIndex:number, pageSize:number) => {
    this.warehouses = null;
    this.service.list(pageIndex, pageSize).subscribe((warehouses:any) => {
      this.warehouses = warehouses.data;
      this.length = warehouses.count;
    }, error => this.onLoadFailed('danger','Error conexión',error.message) );
  });

  changesPage (event){
    if(event.pageSize!=this.pageSize){

    }
    this.pageEvent = event;
    this.readData(event.pageIndex, event.pageSize)
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.service.delete(event.data.id).subscribe( () => {
        this.readData(this.pageEvent.pageIndex, this.pageEvent.pageSize);
      },err =>{
        console.error(err);
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
    const modalRef = this.windowService.open(WarehouseDetailComponent, { title: `Editar almacén`, context: { holiday: event.data }, buttons: buttonsConfig  }).onClose.subscribe(() => {
      this.readData(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });
  
  }

  openWindow() {
    const modalRef = this.windowService.open(WarehouseDetailComponent, { title: `Nuevo almacén` }).onClose.subscribe(() => {
      this.readData(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });
    
  }

}
