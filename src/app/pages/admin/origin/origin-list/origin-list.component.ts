import Swal from 'sweetalert2';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowControlButtonsConfig, NbWindowService } from '@nebular/theme';
<<<<<<< HEAD
import { OriginService } from '../../../../@core/backend/common/services/origin.service';
import { SweetAlertConstants, SweetalertModel } from '../../../../@core/interfaces/auction/sweetalert-model';
=======
>>>>>>> 3fee159132d2c12e33e949fae17d361950d48746
import { BasePage } from '../../../../@core/shared/base-page';

import { OriginDetailComponent } from '../origin-detail/origin-detail.component';
import { OriginInterface } from '../../../../@core/interfaces/auction/origin.model';
import { OriginService } from '../../../../@core/backend/common/services/origin.service';

@Component({
  selector: 'ngx-origin-list',
  templateUrl: './origin-list.component.html',
  styleUrls: ['./origin-list.component.scss']
})
export class OriginListComponent extends BasePage {
<<<<<<< HEAD
  searchForm: FormGroup;
  constructor(private service: OriginService, public toastrService: NbToastrService,
    private windowService: NbWindowService, private paginator: MatPaginatorIntl,
    public sweetalertService: SweetalertService) {
=======

  constructor(
    private service: OriginService, 
    public  toastrService: NbToastrService,
    private windowService: NbWindowService, 
    private paginator: MatPaginatorIntl
  ) {
>>>>>>> 3fee159132d2c12e33e949fae17d361950d48746
    super(toastrService);
    this.paginator.itemsPerPageLabel = "Registros por página";
    this.searchForm = new FormGroup({
      text: new FormControl()
    });
    this.searchForm.controls['text'].valueChanges.subscribe((value:string)=>{
      if(value.length > 0){
        this.service.search(value).subscribe((rows:OriginInterface[])=>{
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
    length:0
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
      idTransferer: {
        title: 'Transferente',
        type: 'string'
      },
      keyTransferer: {
        title: 'Clave transferente',
        type: 'string'
      },
      description: {
        title: 'Descripción',
        type: 'string',
      },
      type: {
        title: 'Tipo',
        type: 'string',
      },
      address: {
        title: 'Dirección',
        type: 'string',
      },
      city: {
        title: 'Ciudad',
        type: 'string',
      },
      keyEntityFederative: {
        title: 'Entidad',
        type: 'string',
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

<<<<<<< HEAD
  read = ((pageIndex: number, pageSize: number) => {
    this.list = null;
    this.service.list(pageIndex, pageSize).subscribe(
      (dt: any) => {
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

=======
  readData = ( () => {
    this.rows = null;
    this.service.list(this.pageEvent.pageIndex, this.pageEvent.pageSize).subscribe((data:any) => {
      this.rows = data.data;
      this.length = data.count;
    }, error => this.onLoadFailed('danger','Error conexión',error.message) );
>>>>>>> 3fee159132d2c12e33e949fae17d361950d48746
  });

  changesPage (event){
    if(event.pageSize!=this.pageSize){

    }
    this.pageEvent = event;
    this.readData();
  }

  onDeleteConfirm(event): void {
<<<<<<< HEAD
    this.sweetalertQuestion('warning', 'Eliminar', 'Desea eliminar este registro?').then(
      question => {
    
        if (question.isConfirmed) {
          this.service.delete(event.data.id).subscribe(
            data => {
              
               if (data.statusCode == 200) {
                this.onLoadFailed('success', 'Eliminado', data.message);
              }// else {
               // this.onLoadFailed('danger', 'Error', data.message);
              //}
             
              this.read(this.pageEvent.pageIndex, this.pageEvent.pageSize);
            }, err => {
              let error = '';
              if (err.status === 0) {
                error = SweetAlertConstants.noConexion;
              } else {
                error = err.message;
              }
              this.onLoadFailed('danger', 'Error', error);
            });
        }
=======
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
       
>>>>>>> 3fee159132d2c12e33e949fae17d361950d48746
      }
    })
  }

  editRow(event) {
    const buttonsConfig: NbWindowControlButtonsConfig = {
      minimize: false,
      maximize: false,
      fullScreen: false,
    };
    
    this.windowService.open(OriginDetailComponent, { 
      title: `Editar pregunta`, 
      context: { questions: event.data }, 
      buttons: buttonsConfig  }).onClose.subscribe(() => {
        this.readData();
      }
    );
  }

  openWindow() {
    this.windowService.open(OriginDetailComponent, 
      { title: `Nueva pregunta` }).onClose.subscribe(() => {
        this.readData();
      }
    );
    
  }

<<<<<<< HEAD
  }

=======
>>>>>>> 3fee159132d2c12e33e949fae17d361950d48746
}

