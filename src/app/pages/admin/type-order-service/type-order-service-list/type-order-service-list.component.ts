import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowControlButtonsConfig, NbWindowService } from '@nebular/theme';
import { SweetAlertResult } from 'sweetalert2';
import { TypeOrderServiceService } from '../../../../@core/backend/common/services/type-order-services.service';
import { SweetAlertConstants, SweetalertModel } from '../../../../@core/interfaces/auction/sweetalert-model';
import { TypeOrderServiceInterface } from '../../../../@core/interfaces/auction/typeorderservices.model';
import { BasePage } from '../../../../@core/shared/base-page';
import { SweetalertService } from '../../../../shared/sweetalert.service';
import { TypeOrderServiceDetailComponent } from '../type-order-service-detail/type-order-service-detail.component';

@Component({
  selector: 'ngx-type-order-service-list',
  templateUrl: './type-order-service-list.component.html',
  styleUrls: ['./type-order-service-list.component.scss']
})
export class TypeOrderServiceListComponent extends BasePage {

  constructor(private service: TypeOrderServiceService, public toastrService: NbToastrService,
    private windowService: NbWindowService, private paginator: MatPaginatorIntl, public sweetalertService: SweetalertService) {
    super(toastrService, sweetalertService);
    this.paginator.itemsPerPageLabel = "Registros por página";
    this.searchForm = new FormGroup({
      text: new FormControl()
    });
    this.searchForm.controls['text'].valueChanges.subscribe((value:string)=>{
      if(value.length > 0){
        this.service.search(value).subscribe((rows:TypeOrderServiceInterface[])=>{
          this.length = rows.length;
          this.list = rows;
        })
      }else{
        this.read(0,10);
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
    length:100
  };

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
  list: any;
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
      },
      cve: {
        title: 'Clave',
        type: 'string',
      },
      description: {
        title: 'Descripción',
        type: 'string',
      },
   
    
    },
    noDataMessage: "No se encontrarón registros"
  };

  ngOnInit(): void {
    this.read(0,10); 
  }

  read = ((pageIndex:number, pageSize:number) => {
    this.list = null;
    this.service.list(pageIndex, pageSize).subscribe((dt:any) =>  {
      this.list = dt.data;
      this.length = dt.count;
    },
    err => {
      let error = '';
      if (err.status === 0) {
        error = SweetAlertConstants.noConexion;
      } else {
        error = err.message;
      }
      this.onLoadFailed('danger', 'Error', error);
    }
    );

  });

  changesPage (event){
    if(event.pageSize!=this.pageSize){

    }
    this.pageEvent = event;
    this.read(event.pageIndex * event.pageSize, event.pageSize)
  }

  onDeleteConfirm(event): void {
    this.sweetalertQuestion('warning', 'Eliminar', '¿Desea eliminar este registro?').then(
      question => {
        if (question.isConfirmed) {
          this.service.delete(event.data.id).subscribe(
            data => {
              this.onLoadFailed('success','Tipo orden servicio eliminada correctamente', data.message);
              this.read(this.pageEvent.pageIndex, this.pageEvent.pageSize);
            }, err => {
              let error = '';
              if (err.status === 0) {
                error = SweetAlertConstants.noConexion;
              } else {
                error = err.message;
              }
              this.onLoadFailed('danger', 'Error', error);
            }
          );
        }
      }
    ).catch(
      e => {
        console.error(e);
      }
    ).finally(
      () => {
        console.log('finaliza');
      }
    );
  }

  editRow(event) {
    const buttonsConfig: NbWindowControlButtonsConfig = {
      minimize: false,
      maximize: false,
      fullScreen: false,
    };
    const modalRef = this.windowService.open(TypeOrderServiceDetailComponent, { title: `Editar`, context: { data: event.data }, buttons: buttonsConfig  }).onClose.subscribe(() => {
      this.read(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });
  
  }

  openWindow() {
    const modalRef = this.windowService.open(TypeOrderServiceDetailComponent, { title: `Nuevo` }).onClose.subscribe(() => {
      this.read(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });
    
  }
}
