import { Component, OnInit } from '@angular/core';
import { BasePage } from '../../../../@core/shared/base-page';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowService, NbWindowControlButtonsConfig } from '@nebular/theme';
import Swal from 'sweetalert2';
import { LockerService } from '../../../../@core/backend/common/services/locker.service';
import { Locker } from '../../../../@core/interfaces/auction/locker.model';
import { LockerDetailComponent } from '../locker-detail/locker-detail.component';


@Component({
  selector: 'ngx-locker-list',
  templateUrl: './locker-list.component.html',
  styleUrls: ['./locker-list.component.scss']
})

export class LockerListComponent extends BasePage {
  constructor(private service: LockerService, public toastrService: NbToastrService,
    private windowService: NbWindowService, private paginator: MatPaginatorIntl) {
    super(toastrService);
    this.paginator.itemsPerPageLabel = "Registros por página";
    this.searchForm = new FormGroup({
      text: new FormControl()
    });
    this.searchForm.controls['text'].valueChanges.subscribe((value:string)=>{
      if(value.length > 0){
        this.service.search(value).subscribe((rows:Locker[])=>{
          this.length = rows.length;
          this.rows = rows;
        })
      }else{
        this.readLocker()
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
      numBattery: {
        title: 'ID Batería',
        type: 'number',
      },
      numShelf: {
        title: 'ID Casillero',
        type: 'number',
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
    this.readLocker();
  }

  readLocker = (() => {
    this.rows = null;
    this.service.list(this.pageEvent.pageIndex, this.pageEvent.pageSize).subscribe((locker:any) =>  {
      this.rows = locker.data;
      this.length = locker.count;
    }, 
    error => this.onLoadFailed('danger','Error conexión',error.message)
    );

  });

  changesPage (event){
    if(event.pageSize!=this.pageSize){

    }
    this.pageEvent = event;
    this.readLocker()
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
          this.readLocker();
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
    this.windowService.open(LockerDetailComponent, { title: `Editar casillero`, context: { locker: event.data }, buttons: buttonsConfig  }).onClose.subscribe(() => {
      this.readLocker();
    });
  
  }

  openWindow() {
    this.windowService.open(LockerDetailComponent, { title: `Nuevo casillero` }).onClose.subscribe(() => {
      this.readLocker();
    });
    
  }


}
