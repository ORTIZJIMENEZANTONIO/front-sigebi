import { Component } from '@angular/core';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowControlButtonsConfig, NbWindowService } from '@nebular/theme';
import { BasePage } from '../../../../@core/shared/base-page';

import { DelegationStateService } from '../../../../@core/backend/common/services/delegation-state.service';
import { DelegationStateDetailComponent } from '../delegation-state-detail/delegation-state-detail.component';

@Component({
  selector: 'ngx-delegation-state-list',
  templateUrl: './delegation-state-list.component.html',
  styleUrls: ['./delegation-state-list.component.scss']
})
export class DelegationStateListComponent extends BasePage {

  constructor(
    private service: DelegationStateService, 
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

  delegationsStates: any;
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
      stateCode: {
        title: 'Código de estado',
        type: 'string',
      },
      version: {
        title: 'Versión',
        type: 'number'
      },
      keyState: {
        title: 'Clave de estado',
        type: 'number'
      },
      status: {
        title: 'Estatus',
        type: 'number'
      },
      editionUser: {
        title: 'Modificado por',
        type: 'string',
      }
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
    this.delegationsStates = null;
    this.service.list(pageIndex, pageSize).subscribe((delegationsStates:any) =>  {
      this.delegationsStates = delegationsStates.data;
      this.length = delegationsStates.count;
    }, 
    error => this.onLoadFailed('danger','Error conexión',error.message)
    );

  });

  changesPage (event){
    if(event.pageSize!=this.pageSize){

    }
    this.pageEvent = event;
    this.readData(event.pageIndex, event.pageSize)
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.service.delete(event.data.id).subscribe(data =>{
        this.readData(this.pageEvent.pageIndex, this.pageEvent.pageSize);
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
    const modalRef = this.windowService.open(DelegationStateDetailComponent, { title: `Editar delegación estado`, context: { deductive: event.data }, buttons: buttonsConfig  }).onClose.subscribe(() => {
      this.readData(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });
  
  }

  openWindow() {
    const modalRef = this.windowService.open(DelegationStateDetailComponent, { title: `Nuevo delegación estado` }).onClose.subscribe(() => {
      this.readData(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });
    
  }


}
