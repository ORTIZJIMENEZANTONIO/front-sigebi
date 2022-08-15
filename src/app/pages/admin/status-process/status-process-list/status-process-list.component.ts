import { Component, OnInit } from '@angular/core';
import { NbToastrService, NbWindowControlButtonsConfig, NbWindowService} from '@nebular/theme';
import { BasePage } from '../../../../@core/shared/base-page';
import { StatusProcessService } from '../../../../@core/backend/common/services/statusProcess.service';
import { StatusProcessDetailComponent } from '../status-process-detail/status-process-detail.component';
import {MatPaginatorIntl, PageEvent} from '@angular/material/paginator';
import Swal from 'sweetalert2';
import { StatusProcessModel } from '../../../../@core/interfaces/auction/statusProcess.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-status-process-list',
  templateUrl: './status-process-list.component.html',
  styleUrls: ['./status-process-list.component.scss']
})
export class StatusProcessListComponent extends BasePage {

  constructor(private service: StatusProcessService, public toastrService: NbToastrService,
    private windowService: NbWindowService, private paginator: MatPaginatorIntl) {
    super(toastrService);
    this.paginator.itemsPerPageLabel = "Registros por página";
    this.searchForm = new FormGroup({
      text: new FormControl()
    });
    this.searchForm.controls['text'].valueChanges.subscribe((value:string)=>{
      if(value.length > 0){
        this.service.search(value).subscribe((rows:StatusProcessModel[])=>{
          this.length = rows.length;
          this.statusProcess = rows;
        })
      }else{
        this.readStatusProcess()
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

  statusProcess: any;
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
      status: {
        title: 'Estatus',
        type: 'string',
      },
      process: {
        title: 'Proceso',
        type: 'string',
        editable: true,
      },
      description: {
        title: 'Descripción',
        type: 'string',
        editable: true,
      }
    },
    noDataMessage: "No se encontrarón registros"
  };

  ngOnInit(): void {
    this.readStatusProcess();
  }

  readStatusProcess = (() => {
    this.statusProcess = null;
    this.service.list(this.pageEvent.pageIndex, this.pageEvent.pageSize).subscribe((statusProcess:any) =>  {
      this.statusProcess = statusProcess.data;
      this.length = statusProcess.count;
    }, 
    error => this.onLoadFailed('danger','Error conexión',error.message)
    );

  });

  changesPage (event){
    this.pageEvent = event;
    this.readStatusProcess()
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
        this.service.delete(event.data.status).subscribe(data =>{
          this.readStatusProcess();
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
    const modalRef = this.windowService.open(StatusProcessDetailComponent, { title: `Editar estatus proceso`, context: { statusProcess: event.data }, buttons: buttonsConfig  }).onClose.subscribe(() => {
      this.readStatusProcess();
    });
  
  }

  openWindowStatusProcess() {
    const modalRef = this.windowService.open(StatusProcessDetailComponent, { title: `Nuevo estatus proceso` }).onClose.subscribe(() => {
      this.readStatusProcess();
    });
    
  }

}
