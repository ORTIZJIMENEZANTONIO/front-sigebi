import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowService, NbWindowControlButtonsConfig } from '@nebular/theme';
import Swal from 'sweetalert2';
import { IndiciadosService } from '../../../../@core/backend/common/services/indiciados.service';
import { Indiciados } from '../../../../@core/interfaces/auction/indiciados.model';
import { BasePage } from '../../../../@core/shared/base-page';
import { IndiciadosDetailComponent } from '../indiciados-detail/indiciados-detail.component';

@Component({
  selector: 'ngx-indiciados-list',
  templateUrl: './indiciados-list.component.html',
  styleUrls: ['./indiciados-list.component.scss']
})
export class IndiciadosListComponent extends BasePage {

  constructor(private service: IndiciadosService, public toastrService: NbToastrService,
    private windowService: NbWindowService, private paginator: MatPaginatorIntl) {
    super(toastrService);
    this.paginator.itemsPerPageLabel = "Registros por página";
    this.searchForm = new FormGroup({
      text: new FormControl()
    });
    this.searchForm.controls['text'].valueChanges.subscribe((value:string)=>{
      if(value.length > 0){
        this.service.search(value).subscribe((rows:Indiciados[])=>{
          this.length = rows.length;
          this.rows = rows;
        })
      }else{
        this.read()
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
        title: 'Numero indiciado',
        type: 'number',
        //editable: false,
        width: '25px'
      },
      name: {
        title: 'Nombre',
        type: 'string',
      },
      noRegistration: {
        title: 'Número de registro',
        type: 'number',
      },
      curp: {
        title: 'Curp',
        type: 'string',
      },
      consecutive: {
        title: 'Consecutivo',
        type: 'number',
      }
      
    },
    noDataMessage: "No se encontrarón registros"
  };

  ngOnInit(): void {
    this.read();
  }

  read = (() => {
    this.rows = null;
    this.service.list(this.pageEvent.pageIndex, this.pageEvent.pageSize).subscribe((legends:any) =>  {
      this.rows = legends.data;
      this.length = legends.count;
    }, 
    error => this.onLoadFailed('danger','Error conexión',error.message)
    );

  });

  changesPage (event){
    if(event.pageSize!=this.pageSize){

    }
    this.pageEvent = event;
    this.read()
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
          this.read();
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
    this.windowService.open(IndiciadosDetailComponent, { title: `Editar indiciado`, context: { data: event.data }, buttons: buttonsConfig  }).onClose.subscribe(() => {
      this.read();
    });
  
  }

  openWindow() {
    this.windowService.open(IndiciadosDetailComponent, { title: `Nuevo indiciado` }).onClose.subscribe(() => {
      this.read();
    });
    
  }

}
