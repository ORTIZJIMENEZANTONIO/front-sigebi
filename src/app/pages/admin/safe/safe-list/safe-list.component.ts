import { Component } from '@angular/core';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowControlButtonsConfig, NbWindowService } from '@nebular/theme';
import { BasePage } from '../../../../@core/shared/base-page';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { SafeInterface } from '../../../../@core/interfaces/auction/safe.model';
import { SafeService } from '../../../../@core/backend/common/services/safe.service';
import { SafeDetailComponent } from '../safe-detail/safe-detail.component';

@Component({
  selector: 'ngx-safe-list',
  templateUrl: './safe-list.component.html',
  styleUrls: ['./safe-list.component.scss']
})
export class SafeListComponent extends BasePage {

  constructor(
    private service: SafeService, 
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
        this.service.search(value).subscribe((rows:SafeInterface[])=>{
          this.length = rows.length;
          this.safes = rows;
        })
      }else{
        this.readSafe()
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

  safes: any;

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
      idSafe: {
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
      ubication: {
        title: 'Ubicación',
        type: 'string',
      },
      registerNumber: {
        title: 'No. de registro',
        type: 'number',
      },
      municipalityCode: {
        title: 'Municipio',
        type: 'string',
      },
      localityCode: {
        title: 'Localidad',
        type: 'string',
      },
      stateCode: {
        title: 'Entidad',
        type: 'string',
      },
      cityCode: {
        title: 'Ciudad',
        type: 'string',
      },
    },
    noDataMessage: "No se encontrarón registros"
  };

  ngOnInit(): void {
    this.readSafe();
  }

  readSafe = (() => {
    this.safes = null;
    this.service.list(this.pageEvent.pageIndex, this.pageEvent.pageSize).subscribe((legends:any) =>  {
      this.safes = legends.data;
      this.length = legends.count;
    }, 
    error => this.onLoadFailed('danger','Error conexión',error.message)
    );

  });

  changesPage (event){
    if(event.pageSize!=this.pageSize){

    }
    this.pageEvent = event;
    this.readSafe()
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
          this.readSafe();
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
    this.windowService.open(SafeDetailComponent, { title: `Editar boveda`, context: { city: event.data }, buttons: buttonsConfig  }).onClose.subscribe(() => {
      this.readSafe();
    });
  
  }

  openWindow() {
    this.windowService.open(SafeDetailComponent, { title: `Nueva boveda` }).onClose.subscribe(() => {
      this.readSafe();
    });
    
  }

}
