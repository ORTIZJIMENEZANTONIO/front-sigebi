import { Component } from '@angular/core';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowControlButtonsConfig, NbWindowService } from '@nebular/theme';
import { BasePage } from '../../../../@core/shared/base-page';

import { StateOfRepublicService } from '../../../../@core/backend/common/services/StateOFRepublic.service';
import { SateDetailComponent } from '../sate-detail/sate-detail.component';

@Component({
  selector: 'ngx-sate-list',
  templateUrl: './sate-list.component.html',
  styleUrls: ['./sate-list.component.scss']
})
export class SateListComponent extends BasePage {

  constructor(
    private service: StateOfRepublicService, 
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

  states: any;
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
      keyState: {
        title: 'Registro',
        type: 'string',
      },
      stateCode: {
        title: 'Código',
        type: 'number'
      },
      entityName: {
        title: 'Nombre',
        type: 'string'
      },
      stdTimezone: {
        title: 'Zona horaria',
        type: 'string',
      },
      verTimezone: {
        title: 'Version de zona horaria',
        type: 'string',
      },
      creationUser: {
        title: 'Creado por',
        type: 'string',
      },
      editionUser: {
        title: 'Modificado por',
        type: 'string',
      },
      version: {
        title: 'Version',
        type: 'number',
      },
      status: {
        title: 'Estatus',
        type: 'html',
        valuePrepareFunction:(value) =>{
          if(value == 0){
            return '<strong><span class="badge badge-pill badge-success">Activo</span></strong>';
          }else{
            return '<strong><span class="badge badge-pill badge-warning">Inactivo</span></strong>';
          }
        }
      },
    },
    noDataMessage: "No se encontrarón registros"
  };

  ngOnInit(): void {
    this.readStations(0,10);
  }
  
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput)
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  readStations = ((pageIndex:number, pageSize:number) => {
    this.states = null;
    this.service.list(pageIndex, pageSize).subscribe((states:any) => {
      this.states = states.data;
      this.length = states.count;
    }, error => this.onLoadFailed('danger','Error conexión',error.message) );
  });

  changesPage (event){
    if(event.pageSize!=this.pageSize){

    }
    this.pageEvent = event;
    this.readStations(event.pageIndex, event.pageSize)
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.service.delete(event.data.id).subscribe( () => {
        this.readStations(this.pageEvent.pageIndex, this.pageEvent.pageSize);
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
    const modalRef = this.windowService.open(SateDetailComponent, { title: `Editar estado`, context: { state: event.data }, buttons: buttonsConfig  }).onClose.subscribe(() => {
      this.readStations(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });
  
  }

  openWindow() {
    const modalRef = this.windowService.open(SateDetailComponent, { title: `Nuevo estado` }).onClose.subscribe(() => {
      this.readStations(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });
    
  }

}
