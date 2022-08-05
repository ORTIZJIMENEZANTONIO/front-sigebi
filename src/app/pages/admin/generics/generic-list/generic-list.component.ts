import { Component, OnInit } from '@angular/core';
import { NbToastrService, NbWindowControlButtonsConfig, NbWindowService} from '@nebular/theme';
import { BasePage } from '../../../../@core/shared/base-page';
import { GenericService } from '../../../../@core/backend/common/services/generic.service';
import { GenericDatailComponent } from '../generic-datail/generic-datail.component';
import {MatPaginatorIntl, PageEvent} from '@angular/material/paginator';
import Swal from 'sweetalert2';
import { GenericModel } from '../../../../@core/interfaces/auction/generic.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-generic-list',
  templateUrl: './generic-list.component.html',
  styleUrls: ['./generic-list.component.scss']
})
export class GenericListComponent extends BasePage {

  constructor(private service: GenericService, public toastrService: NbToastrService,
    private windowService: NbWindowService, private paginator: MatPaginatorIntl) {
    super(toastrService);
    this.paginator.itemsPerPageLabel = "Registros por página";
    this.searchForm = new FormGroup({
      text: new FormControl()
    });
    this.searchForm.controls['text'].valueChanges.subscribe((value:string)=>{
      if(value.length > 0){
        this.service.search(value).subscribe((rows:GenericModel[])=>{
          this.length = rows.length;
          this.generics = rows;
        })
      }else{
        this.readGerenic()
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

  generics: any;
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
      name: {
        title: 'Nombre',
        type: 'string',
        editable: true,
      },
      keyId: {
        title: 'Identificador clave',
        type: 'string',
        editable: true,
      },
      description: {
        title: 'Descripción',
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
      active: {
        title: 'Estatus',
        type: 'string',
      },
      editable: {
        title: 'Editable',
        type: 'string',
      },
    },
    noDataMessage: "No se encontrarón registros"
  };

  ngOnInit(): void {
    this.readGerenic();
  }

  readGerenic = (() => {
    this.generics = null;
    this.service.list(this.pageEvent.pageIndex, this.pageEvent.pageSize).subscribe((generics:any) =>  {
      this.generics = generics.data;
      this.length = generics.count;
    }, 
    error => this.onLoadFailed('danger','Error conexión',error.message)
    );

  });

  changesPage (event){
    this.pageEvent = event;
    this.readGerenic()
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
        this.service.delete(event.data.name).subscribe(data =>{
          this.readGerenic();
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
    const modalRef = this.windowService.open(GenericDatailComponent, { title: `Editar generico`, context: { generic: event.data }, buttons: buttonsConfig  }).onClose.subscribe(() => {
      this.readGerenic();
    });
  
  }

  openWindowGeneric() {
    const modalRef = this.windowService.open(GenericDatailComponent, { title: `Nueva generico` }).onClose.subscribe(() => {
      this.readGerenic();
    });
    
  }

}
