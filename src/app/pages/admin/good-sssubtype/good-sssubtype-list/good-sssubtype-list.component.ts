import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowService, NbWindowControlButtonsConfig } from '@nebular/theme';
import Swal from 'sweetalert2';
import { GoodSssubtypeService } from '../../../../@core/backend/common/services/good-sssubtype.service';
import { GoodSssubtype } from '../../../../@core/interfaces/auction/good-sssubtype.model';
import { BasePage } from '../../../../@core/shared/base-page';
import { GoodSssubtypeDetailComponent } from '../good-sssubtype-detail/good-sssubtype-detail.component';

@Component({
  selector: 'ngx-good-sssubtype-list',
  templateUrl: './good-sssubtype-list.component.html',
  styleUrls: ['./good-sssubtype-list.component.scss']
})
export class GoodSssubtypeListComponent extends BasePage {
  constructor(private service: GoodSssubtypeService, public toastrService: NbToastrService,
    private windowService: NbWindowService, private paginator: MatPaginatorIntl) {
    super(toastrService);
    this.paginator.itemsPerPageLabel = "Registros por página";
    this.searchForm = new FormGroup({
      text: new FormControl()
    });
    this.searchForm.controls['text'].valueChanges.subscribe((value:string)=>{
      if(value.length > 0){
        this.service.search(value).subscribe((rows:GoodSssubtype[])=>{
          this.length = rows.length;
          this.rows = rows;
        })
      }else{
        this.readGoodSssubtype()
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
        title: 'Id',
        type: 'number',
        //editable: false,
        // width: '25px'
      },
      description: {
        title: 'Descripcion',
        type: 'string',
      },
      numType: {
        title: 'Tipo bien',
        type: 'string',
        valuePrepareFunction:(value) =>{
          return value.descripcion
        }
      },
      numSubType: {
        title: 'Subtipo bien',
        type: 'string',
        valuePrepareFunction:(value) =>{
          return value.descripcion
        }
      },
      numSsubType: {
        title: 'Ssubtipo bien',
        type: 'string',
        valuePrepareFunction:(value) =>{
          return value.descripcion
        }
      },
      numClasifGoods: {
        title: 'N Clasif Bien',
        type: 'number',
      },
      numClasifAlterna: {
        title: 'N Clasif alterna',
        type: 'number',
      },
      numRegister: {
        title: 'N registro',
        type: 'number',
      }
    },
    noDataMessage: "No se encontrarón registros"
  };

  ngOnInit(): void {
    this.readGoodSssubtype();
  }

  readGoodSssubtype = (() => {
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
    this.readGoodSssubtype()
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
          this.readGoodSssubtype();
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
    this.windowService.open(GoodSssubtypeDetailComponent, { title: `Editar sssubtipo bien`, context: { GoodSssubtype: event.data }, buttons: buttonsConfig  }).onClose.subscribe(() => {
      this.readGoodSssubtype();
    });
  
  }

  openWindow() {
    this.windowService.open(GoodSssubtypeDetailComponent, { title: `Nueva sssubtipo bien` }).onClose.subscribe(() => {
      this.readGoodSssubtype();
    });
    
  }


}
