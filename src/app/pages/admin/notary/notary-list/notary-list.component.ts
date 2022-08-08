import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowService, NbWindowControlButtonsConfig } from '@nebular/theme';
import Swal from 'sweetalert2';
import { NotaryService } from '../../../../@core/backend/common/services/notary.service';
import { Notary } from '../../../../@core/interfaces/auction/notary.model';
import { BasePage } from '../../../../@core/shared/base-page';
import { NotaryDetailComponent } from '../notary-detail/notary-detail.component';

@Component({
  selector: 'ngx-notary-list',
  templateUrl: './notary-list.component.html',
  styleUrls: ['./notary-list.component.scss']
})
export class NotaryListComponent extends BasePage {

  constructor(private service: NotaryService, public toastrService: NbToastrService,
    private windowService: NbWindowService, private paginator: MatPaginatorIntl) {
    super(toastrService);
    this.paginator.itemsPerPageLabel = "Registros por página";
    this.searchForm = new FormGroup({
      text: new FormControl()
    });
    this.searchForm.controls['text'].valueChanges.subscribe((value:string)=>{
      if(value.length > 0){
        this.service.search(value).subscribe((rows:Notary[])=>{
          this.length = rows.length;
          this.rows = rows;
        })
      }else{
        this.readNotary()
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
      nombre: {
        title: 'Nombre',
        type: 'string',
      },
      valido: {
        title: 'Válido',
        type: 'string',
      },
      no_notaria: {
        title: 'Nro Notaria',
        type: 'number',
      },
      ubicacion: {
        title: 'Ubicación',
        type: 'number',
      },
      domicilio: {
        title: 'Domicilio',
        type: 'string',
      },
      telefono: {
        title: 'Teléfono',
        type: 'string',
      },
      correo: {
        title: 'Correo',
        type: 'string',
      },
      no_registro: {
        title: 'no_registro',
        type: 'number',
      },
    },
    noDataMessage: "No se encontrarón registros"
  };

  ngOnInit(): void {
    this.readNotary();
  }

  readNotary = (() => {
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
    this.readNotary()
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
          this.readNotary();
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
    this.windowService.open(NotaryDetailComponent, { title: `Editar notario`, context: { notary: event.data }, buttons: buttonsConfig  }).onClose.subscribe(() => {
      this.readNotary();
    });
  
  }

  openWindowNotary() {
    this.windowService.open(NotaryDetailComponent, { title: `Nuevo notario` }).onClose.subscribe(() => {
      this.readNotary();
    });
    
  }
}
