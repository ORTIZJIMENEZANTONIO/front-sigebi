import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowService, NbWindowControlButtonsConfig } from '@nebular/theme';
import Swal from 'sweetalert2';
import { GoodTypeService } from '../../../../@core/backend/common/services/good-type.service';
import { GoodType } from '../../../../@core/interfaces/auction/good-type.model';
import { BasePage } from '../../../../@core/shared/base-page';
import { GoodTypeDetailComponent } from '../good-type-detail/good-type-detail.component';

@Component({
  selector: 'ngx-good-type-list',
  templateUrl: './good-type-list.component.html',
  styleUrls: ['./good-type-list.component.scss']
})
export class GoodTypeListComponent extends BasePage {

  constructor(private service: GoodTypeService, public toastrService: NbToastrService,
    private windowService: NbWindowService, private paginator: MatPaginatorIntl) {
    super(toastrService);
    this.paginator.itemsPerPageLabel = "Registros por página";
    this.searchForm = new FormGroup({
      text: new FormControl()
    });
    this.searchForm.controls['text'].valueChanges.subscribe((value:string)=>{
      if(value.length > 0){
        this.service.search(value).subscribe((rows:GoodType[])=>{
          this.length = rows.length;
          this.rows = rows;
        })
      }else{
        this.readGoodType()
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
        title: 'id',
        type: 'number',
        //editable: false,
        // width: '25px'
      },
      descripcion: {
        title: 'Descripcion',
        type: 'string',
      },
      tiempo_max_aseguramiento: {
        title: 'tiempo_max_aseguramiento',
        type: 'string',
      },
      tiempo_max_fraccion: {
        title: 'tiempo_max_fraccion',
        type: 'number'
      },
      tiempo_max_prorroga: {
        title: 'tiempo_max_prorroga',
        type: 'number'
      },
      tiempo_max_declaracion: {
        title: 'tiempo_max_declaracion',
        type: 'number',
      },
      tiempo_max_plazo1: {
        title: 'tiempo_max_plazo1',
        type: 'number',
      },
      tiempo_max_plazo2: {
        title: 'tiempo_max_plazo2',
        type: 'number',
      },
      tiempo_max_plazo3: {
        title: 'tiempo_max_plazo3',
        type: 'number',
      },
      no_registro: {
        title: 'no_registro ',
        type: 'number',
      },
    },
    noDataMessage: "No se encontrarón registros"
  };

  ngOnInit(): void {
    this.readGoodType();
  }

  readGoodType = (() => {
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
    this.readGoodType()
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
          this.readGoodType();
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
    this.windowService.open(GoodTypeDetailComponent, { title: `Editar ciudad`, context: { GoodType: event.data }, buttons: buttonsConfig  }).onClose.subscribe(() => {
      this.readGoodType();
    });
  
  }

  openWindow() {
    this.windowService.open(GoodTypeDetailComponent, { title: `Nueva ciudad` }).onClose.subscribe(() => {
      this.readGoodType();
    });
    
  }


}
