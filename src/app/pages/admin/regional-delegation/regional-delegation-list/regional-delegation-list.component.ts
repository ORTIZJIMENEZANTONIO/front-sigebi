import { Component } from '@angular/core';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowControlButtonsConfig, NbWindowService } from '@nebular/theme';
import { BasePage } from '../../../../@core/shared/base-page';

import { RegionalDelegationService } from '../../../../@core/backend/common/services/regional-delegation.service';
import { RegionalDelegationDetailComponent } from '../regional-delegation-detail/regional-delegation-detail.component';

@Component({
  selector: 'ngx-regional-delegation-list',
  templateUrl: './regional-delegation-list.component.html',
  styleUrls: ['./regional-delegation-list.component.scss']
})
export class RegionalDelegationListComponent extends BasePage {

  constructor(
    private service: RegionalDelegationService, 
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

  regionalDelegations: any;

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
      id: {
        title: 'Registro',
        type: 'string',
      },
      regionalDelegate: {
        title: 'Delegación',
        type: 'string',
      },
      description: {
        title: 'Descripción',
        type: 'string'
      },
      registerNumber: {
        title: 'Número de registro',
        type: 'number'
      },
      idEntity: {
        title: 'Entidad',
        type: 'string',
      },
      idGeographicZona: {
        title: 'Zona geográfica',
        type: 'string',
      },
      officeAddress: {
        title: 'Domicilio oficina',
        type: 'string',
      },
      keyZone: {
        title: 'Zona',
        type: 'string',
      },
      version: {
        title: 'Versión',
        type: 'number',
      },
      creationUser: {
        title: 'Creado por',
        type: 'string',
      },
      editionUser: {
        title: 'Modificado por',
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
    this.regionalDelegations = null;
    this.service.list(pageIndex, pageSize).subscribe((regionalDelegations:any) => {
      this.regionalDelegations = regionalDelegations.data;
      this.length = regionalDelegations.count;
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
    const modalRef = this.windowService.open(RegionalDelegationDetailComponent, { title: `Editar asentamiento`, context: { settlement: event.data }, buttons: buttonsConfig  }).onClose.subscribe(() => {
      this.readData(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });
  
  }

  openWindow() {
    const modalRef = this.windowService.open(RegionalDelegationDetailComponent, { title: `Nuevo asentamiento` }).onClose.subscribe(() => {
      this.readData(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });
    
  }

}
