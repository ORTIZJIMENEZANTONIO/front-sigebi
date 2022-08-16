import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowService, NbWindowControlButtonsConfig } from '@nebular/theme';
import { DetailDelegationService } from '../../../../@core/backend/common/services/detail-delegation.service';
import { DetailDelegation } from '../../../../@core/interfaces/auction/detail-delegation.model';
import { BasePage } from '../../../../@core/shared/base-page';
import  Swal from 'sweetalert2';
import { DetailDelegationDetailComponent } from '../detail-delegation-detail/detail-delegation-detail.component';

@Component({
  selector: 'ngx-detail-delegation-list',
  templateUrl: './detail-delegation-list.component.html',
  styleUrls: ['./detail-delegation-list.component.scss']
})
export class DetailDelegationListComponent extends BasePage {

  constructor(private service: DetailDelegationService, public toastrService: NbToastrService,
    private windowService: NbWindowService, private paginator: MatPaginatorIntl) {
    super(toastrService);
    this.paginator.itemsPerPageLabel = "Registros por página";
    this.searchForm = new FormGroup({
      text: new FormControl()
    });
    this.searchForm.controls['text'].valueChanges.subscribe((value:string)=>{
      if(value.length > 0){
        this.service.search(value).subscribe((rows:DetailDelegation[])=>{
          this.length = rows.length;
          this.rows = rows;
        })
      }else{
        this.readDetailDelegation()
      }
    })
  }

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  searchForm:FormGroup

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
        title: 'Registro',
        type: 'number',
        //editable: false,
        // width: '25px'
      },
      name: {
        title: 'Nombre',
        type: 'string',
      },
      numDelegation: {
        title: 'Delegacion',
        type: 'string',
      },
      area: {
        title: 'Area',
        type: 'string',
      },
      location: {
        title: 'Ubicacion',
        type: 'string',
      },
      address: {
        title: 'direccion',
        type: 'string',
      },
      numP1: {
        title: 'Teléfonos',
        type: 'html',
        valuePrepareFunction:(value,row) =>{
          return `${row.numP1}<br>${row.numP2}<br>${row.numP3}`
        }
      },
    },
    noDataMessage: "No se encontrarón registros"
  };

  ngOnInit(): void {
    this.readDetailDelegation();
  }

  readDetailDelegation = (() => {
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
    this.readDetailDelegation()
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
          this.readDetailDelegation();
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
    this.windowService.open(DetailDelegationDetailComponent, { title: `Editar detalle delegacion`, context: { detailDelegation: event.data }, buttons: buttonsConfig  }).onClose.subscribe(() => {
      this.readDetailDelegation();
    });
  
  }

  openWindowDetailDelegation() {
    this.windowService.open(DetailDelegationDetailComponent, { title: `Nuevo detalle delegacion` }).onClose.subscribe(() => {
      this.readDetailDelegation();
    });
    
  }
}
