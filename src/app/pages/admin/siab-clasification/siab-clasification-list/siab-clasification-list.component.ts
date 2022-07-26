import { Component } from '@angular/core';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowControlButtonsConfig, NbWindowService } from '@nebular/theme';
import { SiabClasificationService } from '../../../../@core/backend/common/services/siab-clasification.service';
import { BasePage } from '../../../../@core/shared/base-page';

import { SiabClasificationDetailComponent } from '../siab-clasification-detail/siab-clasification-detail.component';

@Component({
  selector: 'ngx-siab-clasification-list',
  templateUrl: './siab-clasification-list.component.html',
  styleUrls: ['./siab-clasification-list.component.scss']
})
export class SiabClasificationListComponent extends BasePage {

  constructor(
    private service: SiabClasificationService, 
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

  siabClasifications: any;

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
      keyEntity: {
        title: 'Entidad',
        type: 'string'
      },
      keyTownship: {
        title: 'Municipio',
        type: 'string'
      },
      keyLocality: {
        title: 'Localidad',
        type: 'string',
      },
      name: {
        title: 'Nombre',
        type: 'string',
      },
      type: {
        title: 'Tipo',
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
    this.readStations(0,10);
  }
  
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput)
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  readStations = ((pageIndex:number, pageSize:number) => {
    this.siabClasifications = null;
    this.service.list(pageIndex, pageSize).subscribe((siabClasification:any) => {
      this.siabClasifications = siabClasification.data;
      this.length = siabClasification.count;
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
    const modalRef = this.windowService.open(SiabClasificationDetailComponent, { title: `Editar clasificación`, context: { settlement: event.data }, buttons: buttonsConfig  }).onClose.subscribe(() => {
      this.readStations(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });
  
  }

  openWindow() {
    const modalRef = this.windowService.open(SiabClasificationDetailComponent, { title: `Nuevo clasificación` }).onClose.subscribe(() => {
      this.readStations(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });
    
  }


}
