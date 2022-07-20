import { Component, OnInit } from '@angular/core';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowControlButtonsConfig, NbWindowService } from '@nebular/theme';
import { service } from '../../../../@core/backend/common/services/service.service';
import { BasePage } from '../../../../@core/shared/base-page';
import { DictamentDetailComponent } from '../dictament-detail/dictament-detail.component';

@Component({
  selector: 'ngx-dictament-list',
  templateUrl: './dictament-list.component.html',
  styleUrls: ['./dictament-list.component.scss']
})
export class DictamentListComponent extends BasePage {

  constructor(private service: service, public toastrService: NbToastrService,
    private windowService: NbWindowService, private paginator: MatPaginatorIntl) {
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
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
  paragraphs: any;
  settings = {
    actions: {
      columnTitle: 'Acciones',
      add: true,
      edit: true,
      delete: true,
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
        type: 'number',
        //editable: false,
        // width: '25px'
      },
      description: {
        title: 'Descripción',
        type: 'string',
        editable: true,
      },
      noRegistration: {
        title: 'Numero de registro',
        type: 'number',
      },
      dict_ofi: {
        title: 'Dictamen oficial',
        type: 'string',
      },
      areaProcess: {
        title: 'Area de tramite',
        type: 'string',
      }
    },
    noDataMessage: "No se encontrarón registros"
  };

  ngOnInit(): void {
    this.readDictamen(0,10); 
  }

  readDictamen = ((pageIndex:number, pageSize:number) => {
    this.paragraphs = null;
    this.service.list(pageIndex, pageSize).subscribe((paragraphs:any) =>  {
      this.paragraphs = paragraphs.data;
      this.length = paragraphs.count;
    }, 
    error => this.onLoadFailed('danger','Error conexión',error.message)
    );

  });

  changesPage (event){
    if(event.pageSize!=this.pageSize){

    }
    this.pageEvent = event;
    this.readDictamen(event.pageIndex * event.pageSize, event.pageSize)
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.service.delete(event.data.id).subscribe(data =>{
        console.log(data);
        if(data.statusCode == 200){
          this.onLoadFailed('success','Eliminado',data.message);
        }else{
          this.onLoadFailed('danger','Error',data.message);
        }
        this.readDictamen(this.pageEvent.pageIndex, this.pageEvent.pageSize);
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
    console.log(event.data);
    const modalRef = this.windowService.open(DictamentDetailComponent, { title: `Editar dictamen`, context: { opinion: event.data }, buttons: buttonsConfig  }).onClose.subscribe(() => {
      this.readDictamen(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });
  
  }

  openWindowDictamen() {
    const modalRef = this.windowService.open(DictamentDetailComponent, { title: `Nuevo dictamen` }).onClose.subscribe(() => {
      this.readDictamen(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });
    
  }


}
