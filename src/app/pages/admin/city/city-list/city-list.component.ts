import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowControlButtonsConfig, NbWindowService } from '@nebular/theme';
import Swal from 'sweetalert2';
import { CityService } from '../../../../@core/backend/common/services/city.service';
import { City } from '../../../../@core/interfaces/auction/City.model';
import { BasePage } from '../../../../@core/shared/base-page';
import { CityDetailComponent } from '../city-detail/city-detail.component';

@Component({
  selector: 'ngx-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss'],
 
})
export class CityListComponent extends BasePage {

  constructor(private service: CityService, public toastrService: NbToastrService,
    private windowService: NbWindowService, private paginator: MatPaginatorIntl) {
    super(toastrService);
    this.paginator.itemsPerPageLabel = "Registros por página";
    this.searchForm = new FormGroup({
      text: new FormControl()
    });
    this.searchForm.controls['text'].valueChanges.subscribe((value:string)=>{
      if(value.length > 0){
        this.service.search(value).subscribe((rows:City[])=>{
          this.length = rows.length;
          this.rows = rows;
        })
      }else{
        this.readCity()
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
      cve_entfed: {
        title: 'CVE',
        type: 'string',
      },
      no_delegacion: {
        title: 'Delegación',
        type: 'string',
        valuePrepareFunction:(value) =>{
          return value.descripcion
        }
      },
      no_subdelegacion: {
        title: 'Subdelegación',
        type: 'string',
        valuePrepareFunction:(value) =>{
          return value.descripcion
        }
      },
      leyenda_oficio: {
        title: 'Leyenda',
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
    this.readCity();
  }

  readCity = (() => {
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
    this.readCity()
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
          this.readCity();
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
    this.windowService.open(CityDetailComponent, { title: `Editar ciudad`, context: { city: event.data }, buttons: buttonsConfig  }).onClose.subscribe(() => {
      this.readCity();
    });
  
  }

  openWindowCity() {
    this.windowService.open(CityDetailComponent, { title: `Nueva ciudad` }).onClose.subscribe(() => {
      this.readCity();
    });
    
  }

}
