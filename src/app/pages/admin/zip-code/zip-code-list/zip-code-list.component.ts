import { Component } from '@angular/core';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowControlButtonsConfig, NbWindowService } from '@nebular/theme';
import { BasePage } from '../../../../@core/shared/base-page';

import { ZipCodeService } from '../../../../@core/backend/common/services/zip-code.service';
import { ZipCodeDetailComponent } from '../zip-code-detail/zip-code-detail.component';

@Component({
  selector: 'ngx-zip-code-list',
  templateUrl: './zip-code-list.component.html',
  styleUrls: ['./zip-code-list.component.scss']
})
export class ZipCodeListComponent extends BasePage {

  constructor(
    private service: ZipCodeService, 
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

  zipCodes: any;
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
        type: 'number'
      },
      holidayDate: {
        title: 'Fecha',
        type: 'string',
      },
      description: {
        title: 'Descripción',
        type: 'string'
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
    this.readZipCodes(0,10);
  }
  
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput)
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  readZipCodes = ((pageIndex:number, pageSize:number) => {
    this.zipCodes = null;
    this.service.list(pageIndex, pageSize).subscribe((zipCodes:any) => {
      this.zipCodes = zipCodes.data;
      this.length = zipCodes.count;
    }, error => this.onLoadFailed('danger','Error conexión',error.message) );
  });

  changesPage (event){
    if(event.pageSize!=this.pageSize){

    }
    this.pageEvent = event;
    this.readZipCodes(event.pageIndex, event.pageSize)
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.service.delete(event.data.id).subscribe( () => {
        this.readZipCodes(this.pageEvent.pageIndex, this.pageEvent.pageSize);
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
    const modalRef = this.windowService.open(ZipCodeDetailComponent, { title: `Editar código postal`, context: { holiday: event.data }, buttons: buttonsConfig  }).onClose.subscribe(() => {
      this.readZipCodes(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });
  
  }

  openWindow() {
    const modalRef = this.windowService.open(ZipCodeDetailComponent, { title: `Nuevo código postal` }).onClose.subscribe(() => {
      this.readZipCodes(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });
    
  }

}
