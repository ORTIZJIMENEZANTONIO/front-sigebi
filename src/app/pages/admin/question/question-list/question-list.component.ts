import Swal from 'sweetalert2';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowControlButtonsConfig, NbWindowService } from '@nebular/theme';
import { BasePage } from '../../../../@core/shared/base-page';

import { QuestionService } from '../../../../@core/backend/common/services/question.service';
import { QuestionDetailComponent } from '../question-detail/question-detail.component';
import { QuestionInterface } from '../../../../@core/interfaces/auction/question.model';

@Component({
  selector: 'ngx-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent extends BasePage {

  constructor(
    private service: QuestionService, 
    public  toastrService: NbToastrService,
    private windowService: NbWindowService, 
    private paginator: MatPaginatorIntl
  ) {
    super(toastrService);
    this.paginator.itemsPerPageLabel = "Registros por página";
    this.searchForm = new FormGroup({
      text: new FormControl()
    });
    this.searchForm.controls['text'].valueChanges.subscribe((value:string)=>{
      if(value.length > 0){
        this.service.search(value).subscribe((rows:QuestionInterface[])=>{
          this.length = rows.length;
          this.rows = rows;
        })
      }else{
        this.readData()
      }
    })
  }

  rows: any;
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
      text: {
        title: 'Texto',
        type: 'string'
      },
      type: {
        title: 'Tipo',
        type: 'string'
      },
      maximumScore: {
        title: 'Puntuación máxima',
        type: 'string',
      },
      registerNumber: {
        title: 'No. de registro',
        type: 'number',
      }
    },
    noDataMessage: "No se encontrarón registros"
  };

  ngOnInit(): void {
    this.readData();
  }
  
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput)
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  readData = ( () => {
    this.rows = null;
    this.service.list(this.pageEvent.pageIndex, this.pageEvent.pageSize).subscribe((data:any) => {
      this.rows = data.data;
      this.length = data.count;
    }, error => this.onLoadFailed('danger','Error conexión',error.message) );
  });

  changesPage (event){
    if(event.pageSize!=this.pageSize){

    }
    this.pageEvent = event;
    this.readData();
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
        this.service.delete(event.data.id).subscribe(() =>{
          this.readData();
        },err =>{
          console.error(err);
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
    
    this.windowService.open(QuestionDetailComponent, { 
      title: `Editar pregunta`, 
      context: { questions: event.data }, 
      buttons: buttonsConfig  }).onClose.subscribe(() => {
        this.readData();
      }
    );
  }

  openWindow() {
    this.windowService.open(QuestionDetailComponent, { title: `Nueva pregunta` }).onClose.subscribe(() => {
      this.readData();
    });
    
  }

}
