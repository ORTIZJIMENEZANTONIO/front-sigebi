import { Component, OnInit } from '@angular/core';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowControlButtonsConfig, NbWindowService } from '@nebular/theme';
import { BasePage } from '../../../../@core/shared/base-page';

import { ClarificationService } from '../../../../@core/backend/common/services/clarification.service';
import { ClarificationDetailComponent } from '../clarification-detail/clarification-detail.component'; 

@Component({
  selector: 'ngx-clarification-list',
  templateUrl: './clarification-list.component.html',
  styleUrls: ['./clarification-list.component.scss']
})
export class ClarificationListComponent extends BasePage {

  constructor(
    private service: ClarificationService, 
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

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput)
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
  clarifications: any;
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
        title: 'Identificador',
        type: 'number',
      },
      clarification: {
        title: 'Aclaración',
        type: 'string',
        editable: true,
      },
      type: {
        title: 'Tipo',
        type: 'number',
        editable: true,
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
      active: {
        title: 'Activo',
        type: 'number',
      },
    },
    noDataMessage: "No se encontrarón registros"
  };

  ngOnInit(): void {
    this.readClarifications(0,10);
  }

  readClarifications = ((pageIndex:number, pageSize:number) => {
    this.clarifications = null;
    this.service.list(pageIndex, pageSize).subscribe((clarifications:any) =>  {
      this.clarifications = clarifications.data;
      this.length = clarifications.count;
    }, 
    error => this.onLoadFailed('danger','Error conexión',error.message)
    );

  });

  changesPage (event){
    if(event.pageSize!=this.pageSize){

    }
    this.pageEvent = event;
    this.readClarifications(event.pageIndex, event.pageSize)
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.service.delete(event.data.id).subscribe(data =>{
        this.readClarifications(this.pageEvent.pageIndex, this.pageEvent.pageSize);
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
    const modalRef = this.windowService.open(ClarificationDetailComponent, { title: `Editar aclaración`, context: { clarification: event.data }, buttons: buttonsConfig  }).onClose.subscribe(() => {
      this.readClarifications(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });
  
  }

  openWindow() {
    const modalRef = this.windowService.open(ClarificationDetailComponent, { title: `Nuevo deductiva` }).onClose.subscribe(() => {
      this.readClarifications(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });
    
  }

}
