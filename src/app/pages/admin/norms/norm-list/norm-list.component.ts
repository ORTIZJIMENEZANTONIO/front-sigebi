import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NbToastrService, NbWindowControlButtonsConfig, NbWindowService} from '@nebular/theme';
import { BasePage } from '../../../../@core/shared/base-page';
import { NormModel } from '../../../../@core/interfaces/auction/norm.model';
import { NormService } from '../../../../@core/backend/common/services/norm.service';
import { NormDetailComponent } from '../norm-detail/norm-detail.component';
import {MatPaginatorIntl, PageEvent} from '@angular/material/paginator';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-norm-list',
  templateUrl: './norm-list.component.html',
  styleUrls: ['./norm-list.component.scss']
})
export class NormListComponent extends BasePage {

  constructor(private service: NormService, public toastrService: NbToastrService,
    private windowService: NbWindowService, private paginator: MatPaginatorIntl) {
    super(toastrService);
    this.paginator.itemsPerPageLabel = "Registros por página";
    this.searchForm = new FormGroup({
      text: new FormControl()
    });
    this.searchForm.controls['text'].valueChanges.subscribe((value:string)=>{
      if(value.length > 0){
        this.service.search(value).subscribe((rows:NormModel[])=>{
          this.length = rows.length;
          this.norms = rows;
        })
      }else{
        this.readNorm()
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
    length:0
  };

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  norms: any;
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
      norm: {
        title: 'Norma',
        type: 'string',
        editable: true,
      },
      article: {
        title: 'Artículo',
        type: 'string',
        editable: true,
      },
      type: {
        title: 'Tipo',
        type: 'string',
        editable: true,
      },
      characteristics: {
        title: 'Caracteristicas',
        type: 'string',
        editable: true,
      },
      merchandise: {
        title: 'Mercancias',
        type: 'string',
      },
      fundament: {
        title: 'Fundamento',
        type: 'string',
      },
      objective: {
        title: 'Objetivo',
        type: 'string',
      },
      destination: {
        title: 'Destino',
        type: 'string',
      },
      condition: {
        title: 'Condición',
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
        type: 'string',
      },
    },
    noDataMessage: "No se encontrarón registros"
  };

  ngOnInit(): void {
    this.readNorm();
  }

  readNorm = (() => {
    this.norms = null;
    this.service.list(this.pageEvent.pageIndex, this.pageEvent.pageSize).subscribe((norms:any) =>  {
      this.norms = norms.data;
      this.length = norms.count;
    }, 
    error => this.onLoadFailed('danger','Error conexión',error.message)
    );

  });

  changesPage (event){
    this.pageEvent = event;
    this.readNorm()
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
          this.readNorm();
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
    const modalRef = this.windowService.open(NormDetailComponent, { title: `Editar norma`, context: { norm: event.data }, buttons: buttonsConfig  }).onClose.subscribe(() => {
      this.readNorm();
    });
  
  }

  openWindowNorm() {
    const modalRef = this.windowService.open(NormDetailComponent, { title: `Nueva norma` }).onClose.subscribe(() => {
      this.readNorm();
    });
    
  }

}
