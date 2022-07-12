import { Component, OnInit } from '@angular/core';
import { NbToastrService, NbWindowControlButtonsConfig, NbWindowService} from '@nebular/theme';
import { BasePage } from '../../../../@core/shared/base-page';
import { ParagraphsService } from '../../../../@core/backend/common/services/paragraphs.service';
import { ParagraphsDetailComponent } from '../paragraphs-detail/paragraphs-detail.component';
import {MatPaginatorIntl, PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'ngx-paragraphs-list',
  templateUrl: './paragraphs-list.component.html',
  styleUrls: ['./paragraphs-list.component.scss']
})
export class ParagraphsListComponent extends BasePage {
  constructor(private service: ParagraphsService, public toastrService: NbToastrService,
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
      paragraph: {
        title: 'Párrafo',
        type: 'string',
        editable: true,
      },
      userCreation: {
        title: 'Creado por',
        type: 'string',
      },
      userModification: {
        title: 'Modificado por',
        type: 'string',
      },
      version: {
        title: 'Version',
        type: 'number',
      },
      reportName: {
        title: 'Nombre reporte',
        type: 'string',
      },
    },
    noDataMessage: "No se encontrarón registros"
  };
  ngOnInit(): void {
    this.readParagraphs(0,10);
  }

  readParagraphs = ((pageIndex:number, pageSize:number) => {
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
    this.readParagraphs(event.pageIndex * event.pageSize, event.pageSize)
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.service.delete(event.data.id).subscribe(data =>{
        this.readParagraphs(this.pageEvent.pageIndex, this.pageEvent.pageSize);
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
    const modalRef = this.windowService.open(ParagraphsDetailComponent, { title: `Editar parrafo`, context: { paragraph: event.data }, buttons: buttonsConfig  }).onClose.subscribe(() => {
      this.readParagraphs(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });
  
  }

  openWindowParagraph() {
    const modalRef = this.windowService.open(ParagraphsDetailComponent, { title: `Nuevo parrafo` }).onClose.subscribe(() => {
      this.readParagraphs(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });
    
  }

}
