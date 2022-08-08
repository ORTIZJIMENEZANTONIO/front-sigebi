import { Component, OnInit } from '@angular/core';
import { NbToastrService, NbWindowControlButtonsConfig, NbWindowService} from '@nebular/theme';
import { BasePage } from '../../../../@core/shared/base-page';
import { ParagraphsService } from '../../../../@core/backend/common/services/paragraphs.service';
import { ParagraphsDetailComponent } from '../paragraphs-detail/paragraphs-detail.component';
import {MatPaginatorIntl, PageEvent} from '@angular/material/paginator';
import Swal from 'sweetalert2';
import { ParagraphsModel } from '../../../../@core/interfaces/auction/paragraphs.model';
import { FormControl, FormGroup } from '@angular/forms';

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
    this.searchForm = new FormGroup({
      text: new FormControl()
    });
    this.searchForm.controls['text'].valueChanges.subscribe((value:string)=>{
      if(value.length > 0){
        this.service.search(value).subscribe((rows:ParagraphsModel[])=>{
          this.length = rows.length;
          this.paragraphs = rows;
        })
      }else{
        this.readParagraphs()
      }
    })
  }

  searchForm:FormGroup;

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
    this.readParagraphs();
  }

  readParagraphs = (() => {
    this.paragraphs = null;
    this.service.list(this.pageEvent.pageIndex, this.pageEvent.pageSize).subscribe((paragraphs:any) =>  {
      this.paragraphs = paragraphs.data;
      this.length = paragraphs.count;
    }, 
    error => this.onLoadFailed('danger','Error conexión',error.message)
    );

  });

  changesPage (event){
    this.pageEvent = event;
    this.readParagraphs()

  }

  onDeleteConfirm(event): void {
    Swal.fire({
      title: 'Esta seguro de eliminar el registro?',
      text: "Esta acción no es revertible!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText:'Cancelar',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.delete(event.data.id).subscribe(data =>{
          this.readParagraphs();
        },err =>{
          console.log(err);
        })
       
      }
    })
    
  }
  editRow(event) {
    const buttonsConfig: NbWindowControlButtonsConfig = {
      minimize: false,
      maximize: false,
      fullScreen: false,
    };
    const modalRef = this.windowService.open(ParagraphsDetailComponent, { title: `Editar parrafo`, context: { paragraph: event.data }, buttons: buttonsConfig  }).onClose.subscribe(() => {
      this.readParagraphs();
    });
  
  }

  openWindowParagraph() {
    const modalRef = this.windowService.open(ParagraphsDetailComponent, { title: `Nuevo parrafo` }).onClose.subscribe(() => {
      this.readParagraphs();
    });
    
  }

}
