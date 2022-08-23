import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowService, NbWindowControlButtonsConfig } from '@nebular/theme';
import Swal, { SweetAlertResult } from 'sweetalert2';
import { IndiciadosService } from '../../../../@core/backend/common/services/indiciados.service';
import { Indiciados } from '../../../../@core/interfaces/auction/indiciados.model';
import { SweetAlertConstants, SweetalertModel } from '../../../../@core/interfaces/auction/sweetalert-model';
import { BasePage } from '../../../../@core/shared/base-page';
import { SweetalertService } from '../../../../shared/sweetalert.service';
import { IndiciadosDetailComponent } from '../indiciados-detail/indiciados-detail.component';

@Component({
  selector: 'ngx-indiciados-list',
  templateUrl: './indiciados-list.component.html',
  styleUrls: ['./indiciados-list.component.scss']
})
export class IndiciadosListComponent extends BasePage {

  constructor(private service: IndiciadosService, public toastrService: NbToastrService,
    private windowService: NbWindowService, private paginator: MatPaginatorIntl, public sweetalertService: SweetalertService) {
    super(toastrService, sweetalertService);
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
    this.read()
  }

  onDeleteConfirm(event): void {
    this.sweetalertQuestion('warning', 'Eliminar', '¿Desea eliminar este registro?').then(
      question => {
        if (question.isConfirmed) {
          this.service.delete(event.data.id).subscribe(
            data => {
              this.onLoadFailed('success','Indiciado eliminada correctamente', data.message);
              this.read();
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
    this.windowService.open(IndiciadosDetailComponent, { title: `Editar`, context: { data: event.data }, buttons: buttonsConfig  }).onClose.subscribe(() => {
      this.read();
    });
  
  }

  openWindow() {
    this.windowService.open(IndiciadosDetailComponent, { title: `Nuevo` }).onClose.subscribe(() => {
      this.read();
    });
    
  }
}
