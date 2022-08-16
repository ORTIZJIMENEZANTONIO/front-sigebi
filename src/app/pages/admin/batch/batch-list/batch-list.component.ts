import { Component, OnInit } from '@angular/core';
import { BasePage } from '../../../../@core/shared/base-page';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowService, NbWindowControlButtonsConfig } from '@nebular/theme';
import Swal from 'sweetalert2';
import { BatchService } from '../../../../@core/backend/common/services/batch.service';
import { Batch } from '../../../../@core/interfaces/auction/batch.model';
import { BatchDetailComponent } from '../batch-detail/batch-detail.component';


@Component({
  selector: 'ngx-batch-list',
  templateUrl: './batch-list.component.html',
  styleUrls: ['./batch-list.component.scss']
})

export class BatchListComponent extends BasePage {
  constructor(private service: BatchService, public toastrService: NbToastrService,
    private windowService: NbWindowService, private paginator: MatPaginatorIntl) {
    super(toastrService);
    this.paginator.itemsPerPageLabel = "Registros por página";
    this.searchForm = new FormGroup({
      text: new FormControl()
    });
    this.searchForm.controls['text'].valueChanges.subscribe((value:string)=>{
      if(value.length > 0){
        this.service.search(value).subscribe((rows:Batch[])=>{
          this.length = rows.length;
          this.rows = rows;
        })
      }else{
        this.readBatch()
      }
    })
  }

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  searchForm:FormGroup;
 

  // MatPaginator Output
  pageEvent: PageEvent = {
    pageIndex:0,
    pageSize:10,
    length:0
  };

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  rows: any;
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
        title: 'Id',
        type: 'number',
        //editable: false,
        width: '25px'
      },
      numStore: {
        title: 'ID Almacen',
        type: 'number',
      },
      numRegister: {
        title: 'ID Registro',
        type: 'string',
      },
      description: {
        title: 'Descripción',
        type: 'string',
      },
      status: {
        title: 'Estado',
        type: 'string',
      }
    },
    noDataMessage: "No se encontraron registros"
  };

  ngOnInit(): void {
    this.readBatch();
  }

  readBatch = (() => {
    this.rows = null;
    this.service.list(this.pageEvent.pageIndex, this.pageEvent.pageSize).subscribe((batch:any) =>  {
      this.rows = batch.data;
      this.length = batch.count;
    }, 
    error => this.onLoadFailed('danger','Error conexión',error.message)
    );

  });

  changesPage (event){
    if(event.pageSize!=this.pageSize){

    }
    this.pageEvent = event;
    this.readBatch()
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
          this.readBatch();
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
    this.windowService.open(BatchDetailComponent, { title: `Editar lote`, context: { batch: event.data }, buttons: buttonsConfig  }).onClose.subscribe(() => {
      this.readBatch();
    });
  
  }

  openWindow() {
    this.windowService.open(BatchDetailComponent, { title: `Nuevo lote` }).onClose.subscribe(() => {
      this.readBatch();
    });
    
  }


}
