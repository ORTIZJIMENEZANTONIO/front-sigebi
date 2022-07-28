import { Component } from '@angular/core';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowControlButtonsConfig, NbWindowService } from '@nebular/theme';
import { BasePage } from '../../../../@core/shared/base-page';

import { DeductiveService } from '../../../../@core/backend/common/services/deductive.service';
import { DeductiveDetailComponent } from '../deductive-detail/deductive-detail.component';

@Component({
  selector: 'ngx-deductive-list',
  templateUrl: './deductive-list.component.html',
  styleUrls: ['./deductive-list.component.scss']
})
export class DeductiveListComponent extends BasePage {

  constructor(
    private service: DeductiveService, 
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
        type: 'number'
      },
      serviceType: {
        title: 'Tipo de servicio',
        type: 'string',
      },
      weightedDeduction: {
        title: 'Ponderación',
        type: 'number'
      },
      startingRankPercentage: {
        title: 'Porcentaje inicial',
        type: 'number'
      },
      finalRankPercentage: {
        title: 'Porcentaje final',
        type: 'number'
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
      contractNumber: {
        title: 'No. de contrato',
        type: 'number',
      },
    },
    noDataMessage: "No se encontrarón registros"
  };

  ngOnInit(): void {
    this.readDeductives(0,10);
  }
  
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput)
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  readDeductives = ((pageIndex:number, pageSize:number) => {
    this.deductives = null;
    this.service.list(pageIndex, pageSize).subscribe((deductives:any) =>  {
      this.deductives = deductives.data;
      this.length = deductives.count;
    }, 
    error => this.onLoadFailed('danger','Error conexión',error.message)
    );

  });

  changesPage (event){
    if(event.pageSize!=this.pageSize){

    }
    this.pageEvent = event;
    this.readDeductives(event.pageIndex, event.pageSize)
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.service.delete(event.data.id).subscribe(data =>{
        this.readDeductives(this.pageEvent.pageIndex, this.pageEvent.pageSize);
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
    const modalRef = this.windowService.open(DeductiveDetailComponent, { title: `Editar deductiva`, context: { deductive: event.data }, buttons: buttonsConfig  }).onClose.subscribe(() => {
      this.readDeductives(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });
  
  }

  openWindowDeductive() {
    const modalRef = this.windowService.open(DeductiveDetailComponent, { title: `Nuevo deductiva` }).onClose.subscribe(() => {
      this.readDeductives(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });
    
  }

}
