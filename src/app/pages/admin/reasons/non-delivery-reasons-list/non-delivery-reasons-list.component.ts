import { Component, OnInit } from '@angular/core';
import { NbToastrService, NbWindowControlButtonsConfig, NbWindowService} from '@nebular/theme';
import { BasePage } from '../../../../@core/shared/base-page';
import { NonDeliveryReasonsService } from '../../../../@core/backend/common/services/nonDeliveryReasons.service';
import { NonDeliveryReasonsDetailComponent } from '../non-delivery-reasons-detail/non-delivery-reasons-detail.component';
import {MatPaginatorIntl, PageEvent} from '@angular/material/paginator';
import Swal from 'sweetalert2';


@Component({
  selector: 'ngx-non-delivery-reasons-list',
  templateUrl: './non-delivery-reasons-list.component.html',
  styleUrls: ['./non-delivery-reasons-list.component.scss']
})
export class NonDeliveryReasonsListComponent extends BasePage {
  constructor(private service: NonDeliveryReasonsService, public toastrService: NbToastrService,
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
  reasons: any;
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
      reasonType: {
        title: 'Tipo de motivo',
        type: 'string',
        editable: true,
      },
      eventType: {
        title: 'Tipo de evento',
        type: 'string',
        editable: true,
      },
      reason: {
        title: 'Motivo',
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
      status: {
        title: 'Estatus',
        type: 'html',
        valuePrepareFunction:(value) =>{
          if(value == 0){
            return '<strong><span class="badge badge-pill badge-success">Activo</span></strong>';
          }else{
            return '<strong><span class="badge badge-pill badge-warning">Inactivo</span></strong>';
          }
        }
      },
    },
    noDataMessage: "No se encontrarón registros"
  };
  ngOnInit(): void {
    this.readReasons(0,10);
  }

  readReasons = ((pageIndex:number, pageSize:number) => {
    this.reasons = null;
    this.service.list(pageIndex, pageSize, 'non-delivery-reasons').subscribe((reasons:any) =>  {
      this.reasons = reasons.data;
      this.length = reasons.count;
    }, 
    error => this.onLoadFailed('danger','Error conexión',error.message)
    );

  });

  changesPage (event){
    this.pageEvent = event;
    this.readReasons(event.pageIndex, event.pageSize)

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
          this.readReasons(this.pageEvent.pageIndex, this.pageEvent.pageSize);
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
    const modalRef = this.windowService.open(NonDeliveryReasonsDetailComponent, { title: `Editar motivo no entrega`, context: { reason: event.data }, buttons: buttonsConfig  }).onClose.subscribe(() => {
      this.readReasons(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });
  
  }

  openWindowReason() {
    const modalRef = this.windowService.open(NonDeliveryReasonsDetailComponent, { title: `Nuevo motivo no entrega` }).onClose.subscribe(() => {
      this.readReasons(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });
    
  }

}
