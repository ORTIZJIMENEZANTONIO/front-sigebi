import { Component } from '@angular/core';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowControlButtonsConfig, NbWindowService } from '@nebular/theme';
import { BasePage } from '../../../../@core/shared/base-page';

import { DeductiveVerificationService } from '../../../../@core/backend/common/services/deductive-verification.service';
import { DeductiveVerificationDetailComponent } from '../deductive-verification-detail/deductive-verification-detail.component';

@Component({
  selector: 'ngx-deductive-verification-list',
  templateUrl: './deductive-verification-list.component.html',
  styleUrls: ['./deductive-verification-list.component.scss']
})
export class DeductiveVerificationListComponent extends BasePage {

  constructor(
    private service: DeductiveVerificationService, 
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

  deductives: any;

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
      description: {
        title: 'Descripción',
        type: 'string'
      },
      percentagePena: {
        title: 'Porcentaje Pena',
        type: 'string',
      },
      verificationType: {
        title: 'Tipo de verificación',
        type: 'string',
      },
      creationUser: {
        title: 'Creado por',
        type: 'string',
      },
      editionUser: {
        title: 'Modificado por',
        type: 'string',
      }
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
    this.deductives = null;
    this.service.list(pageIndex, pageSize).subscribe((deductives:any) => {
      this.deductives = deductives.data;
      this.length = deductives.count;
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
    const modalRef = this.windowService.open(DeductiveVerificationDetailComponent, { title: `Editar verificación deductiva`, context: { settlement: event.data }, buttons: buttonsConfig  }).onClose.subscribe(() => {
      this.readStations(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });
  
  }

  openWindow() {
    const modalRef = this.windowService.open(DeductiveVerificationDetailComponent, { title: `Nuevo verificación deductiva` }).onClose.subscribe(() => {
      this.readStations(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });
    
  }


}
