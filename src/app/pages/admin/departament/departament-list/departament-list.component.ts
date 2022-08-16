import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowService, NbWindowControlButtonsConfig } from '@nebular/theme';
import Swal from 'sweetalert2';
import { DepartamentService } from '../../../../@core/backend/common/services/departament.service';
import { Departament } from '../../../../@core/interfaces/auction/departament.model';
import { BasePage } from '../../../../@core/shared/base-page';
import { DepartamentDetailComponent } from '../departament-detail/departament-detail.component';

@Component({
  selector: 'ngx-departament-list',
  templateUrl: './departament-list.component.html',
  styleUrls: ['./departament-list.component.scss']
})
export class DepartamentListComponent extends BasePage {

  constructor(private service: DepartamentService, public toastrService: NbToastrService,
    private windowService: NbWindowService, private paginator: MatPaginatorIntl) {
    super(toastrService);
    this.paginator.itemsPerPageLabel = "Registros por página";
    this.searchForm = new FormGroup({
      text: new FormControl()
    });
    this.searchForm.controls['text'].valueChanges.subscribe((value:string)=>{
      if(value.length > 0){
        this.service.search(value).subscribe((rows:Departament[])=>{
          this.length = rows.length;
          this.rows = rows;
        })
      }else{
        this.readDepartament()
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
      dsarea: {
        title: 'DsArea',
        type: 'string',
      },
      numDelegation: {
        title: 'Delegación',
        type: 'string',
        valuePrepareFunction:(value) =>{
          return value.descripcion
        }
      },
      numSubDelegation: {
        title: 'Subdelegación',
        type: 'string',
        valuePrepareFunction:(value) =>{
          return value.descripcion
        }
      },
      description: {
        title: 'Descripcion',
        type: 'string',
      },
      numRegister: {
        title: 'N registro',
        type: 'number',
      },
      lastOffice: {
        title: 'Oficio',
        type: 'number',
      },
      level: {
        title: 'Nivel',
        type: 'number',
      },
      phaseEdo: {
        title: 'Etapa EDO',
        type: 'number',
      },
    },
    noDataMessage: "No se encontrarón registros"
  };

  ngOnInit(): void {
    this.readDepartament();
  }

  readDepartament = (() => {
    this.rows = null;
    this.service.list(this.pageEvent.pageIndex, this.pageEvent.pageSize).subscribe((departament:any) =>  {
      this.rows = departament.data;
      this.length = departament.count;
    }, 
    error => this.onLoadFailed('danger','Error conexión',error.message)
    );

  });

  changesPage (event){
    if(event.pageSize!=this.pageSize){

    }
    this.pageEvent = event;
    this.readDepartament()
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
          this.readDepartament();
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
    this.windowService.open(DepartamentDetailComponent, { title: `Editar departamento`, context: { Departament: event.data }, buttons: buttonsConfig  }).onClose.subscribe(() => {
      this.readDepartament();
    });
  
  }

  openWindow() {
    this.windowService.open(DepartamentDetailComponent, { title: `Nuevo departamento` }).onClose.subscribe(() => {
      this.readDepartament();
    });
    
  }

}
