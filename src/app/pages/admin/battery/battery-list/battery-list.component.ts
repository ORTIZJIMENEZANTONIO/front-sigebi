import { Component } from '@angular/core';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowControlButtonsConfig, NbWindowService } from '@nebular/theme';
import { BasePage } from '../../../../@core/shared/base-page';

import { BatteryService } from '../../../../@core/backend/common/services/battery.service';
import { BankDetailComponent } from '../../bank/bank-detail/bank-detail.component'; 

@Component({
  selector: 'ngx-bank-list',
  templateUrl: './battery-list.component.html',
  styleUrls: ['./battery-list.component.scss']
})
export class BatteryListComponent extends BasePage {

  constructor(
    private service: BatteryService, 
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
  batteries: any;
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
      idBattery: {
        title: 'Id Bateria',
        type: 'number'
      },
      storeCode: {
        title: 'Código de almacenamiento',
        type: 'string',
      },
      description: {
        title: 'Descripción',
        type: 'string'
      },
      status: {
        title: 'Estatus',
        type: 'string'
      },
      registerNumber: {
        title: 'No. de registro',
        type: 'number',
      },
    },
    noDataMessage: "No se encontrarón registros"
  };

  ngOnInit(): void {
    this.readbatteries(0,10);
  }

  readbatteries = ((pageIndex:number, pageSize:number) => {
    this.batteries = null;
    this.service.list(pageIndex, pageSize).subscribe((batteries:any) =>  {
      this.batteries = batteries.data;
      this.length = batteries.count;
    }, 
    error => this.onLoadFailed('danger','Error conexión',error.message)
    );

  });

  changesPage (event){
    if(event.pageSize!=this.pageSize){

    }
    this.pageEvent = event;
    this.readbatteries(event.pageIndex, event.pageSize)
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.service.delete(event.data.id).subscribe( () => {
        this.readbatteries(this.pageEvent.pageIndex, this.pageEvent.pageSize);
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
      this.readbatteries(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });
  
  }

  openWindow() {
    const modalRef = this.windowService.open(BankDetailComponent, { title: `Nuevo deductiva` }).onClose.subscribe(() => {
      this.readbatteries(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });
    
  }

}
