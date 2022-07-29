import { Component } from '@angular/core';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowControlButtonsConfig, NbWindowService } from '@nebular/theme';
import { BasePage } from '../../../../@core/shared/base-page';

import { GeneralStatusService } from '../../../../@core/backend/common/services/general-status.service';
import { GeneralStatusDetailComponent } from '../general-status-detail/general-status-detail.component';

@Component({
  selector: 'ngx-general-status-list',
  templateUrl: './general-status-list.component.html',
  styleUrls: ['./general-status-list.component.scss']
})
export class GeneralStatusListComponent extends BasePage {

  constructor(
    private service: GeneralStatusService, 
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

  generalsStatus: any;

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
      statusGeneral: {
        title: 'Estatus general',
        type: 'string',
      },
      statusProperty: {
        title: 'Estatus bien',
        type: 'string',
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
    this.generalsStatus = null;
    this.service.list(pageIndex, pageSize).subscribe((generalsStatus:any) => {
      this.generalsStatus = generalsStatus.data;
      this.length = generalsStatus.count;
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
    const modalRef = this.windowService.open(GeneralStatusDetailComponent, { title: `Editar estatus general`, context: { settlement: event.data }, buttons: buttonsConfig  }).onClose.subscribe(() => {
      this.readStations(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });
  
  }

  openWindow() {
    const modalRef = this.windowService.open(GeneralStatusDetailComponent, { title: `Nuevo estatus general` }).onClose.subscribe(() => {
      this.readStations(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });
    
  }

}
