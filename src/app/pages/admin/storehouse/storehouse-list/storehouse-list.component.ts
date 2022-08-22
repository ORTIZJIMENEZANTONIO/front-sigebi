import { Component } from '@angular/core';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowControlButtonsConfig, NbWindowService } from '@nebular/theme';
import { BasePage } from '../../../../@core/shared/base-page';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { StorehouseInterface } from '../../../../@core/interfaces/auction/storehouse.model';
import { StorehouseService } from '../../../../@core/backend/common/services/storehouse.service';
import { StorehouseDetailComponent } from '../storehouse-detail/storehouse-detail.component';

@Component({
  selector: 'ngx-storehouse-list',
  templateUrl: './storehouse-list.component.html',
  styleUrls: ['./storehouse-list.component.scss']
})
export class StorehouseListComponent extends BasePage {

  constructor(
    private service: StorehouseService, 
    public  toastrService: NbToastrService,
    private windowService: NbWindowService, 
    private paginator: MatPaginatorIntl
  ) {
    super(toastrService);
    this.paginator.itemsPerPageLabel = "Registros por página";
    this.searchForm = new FormGroup({
      text: new FormControl()
    });
    this.searchForm.controls['text'].valueChanges.subscribe((value:string)=>{
      if(value.length > 0){
        this.service.search(value).subscribe((rows:StorehouseInterface[])=>{
          this.length = rows.length;
          this.storehouses = rows;
        })
      }else{
        this.readStorehouse()
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
    length:100
  };

  storehouses: any;

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
      idStorehouse: {
        title: 'Registro',
        type: 'string',
      },
      manager: {
        title: 'Encargado',
        type: 'string'
      },
      description: {
        title: 'Descripción',
        type: 'string'
      },
      municipality: {
        title: 'Municipio',
        type: 'string',
      },
      locality: {
        title: 'Localidad',
        type: 'string',
      },
      ubication: {
        title: 'Ubicación',
        type: 'string',
      },
      idEntity: {
        title: 'Entidad',
        type: 'string',
      }
    },
    noDataMessage: "No se encontrarón registros"
  };

  ngOnInit(): void {
    this.readStorehouse();
  }

  readStorehouse = (() => {
    this.storehouses = null;
    this.service.list(this.pageEvent.pageIndex, this.pageEvent.pageSize).subscribe((legends:any) =>  {
      this.storehouses = legends.data;
      this.length = legends.count;
    }, 
    error => this.onLoadFailed('danger','Error conexión',error.message)
    );

  });

  changesPage (event){
    if(event.pageSize!=this.pageSize){

    }
    this.pageEvent = event;
    this.readStorehouse()
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
          this.readStorehouse();
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
    this.windowService.open(StorehouseDetailComponent, { title: `Editar bodega`, context: { city: event.data }, buttons: buttonsConfig  }).onClose.subscribe(() => {
      this.readStorehouse();
    });
  
  }

  openWindow() {
    this.windowService.open(StorehouseDetailComponent, { title: `Nueva bodega` }).onClose.subscribe(() => {
      this.readStorehouse();
    });
    
  }

}
