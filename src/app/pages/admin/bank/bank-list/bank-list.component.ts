import { Component } from '@angular/core';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowControlButtonsConfig, NbWindowService } from '@nebular/theme';
import { BasePage } from '../../../../@core/shared/base-page';

import { BankService } from '../../../../@core/backend/common/services/bank.service';
import { BankDetailComponent } from '../bank-detail/bank-detail.component';

@Component({
  selector: 'ngx-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.scss']
})
export class BankListComponent extends BasePage{

  constructor(
    private service: BankService, 
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
  banks: any;
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
      bankCode: {
        title: 'Registro',
        type: 'string'
      },
      name: {
        title: 'Nombre',
        type: 'string',
      },
      registerNumber: {
        title: 'Número de registro',
        type: 'number'
      },
      ifdsc: {
        title: 'Porcentaje inicial',
        type: 'string'
      },
      dateType: {
        title: 'Tipo de fecha',
        type: 'number',
      },
      code: {
        title: 'Código',
        type: 'number',
      },
    },
    noDataMessage: "No se encontrarón registros"
  };

  ngOnInit(): void {
    this.readData(0,10);
  }

  readData = ((pageIndex:number, pageSize:number) => {
    this.banks = null;
    this.service.list(pageIndex, pageSize).subscribe((banks:any) =>  {
      this.banks = banks.data;
      this.length = banks.count;
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
      this.service.delete(event.data.id).subscribe( () => {
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
    const modalRef = this.windowService.open(BankDetailComponent, { title: `Editar deductiva`, context: { bank: event.data }, buttons: buttonsConfig  }).onClose.subscribe(() => {
      this.readData(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });
  
  }

  openWindow() {
    const modalRef = this.windowService.open(BankDetailComponent, { title: `Nuevo deductiva` }).onClose.subscribe(() => {
      this.readData(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });
    
  }

}
