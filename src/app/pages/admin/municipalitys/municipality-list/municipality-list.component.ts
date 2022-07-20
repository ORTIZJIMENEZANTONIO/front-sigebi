import { Component, OnInit } from '@angular/core';
import { NbToastrService, NbWindowControlButtonsConfig, NbWindowService} from '@nebular/theme';
import { BasePage } from '../../../../@core/shared/base-page';
import { MunicipalityService } from '../../../../@core/backend/common/services/municipality.service';
import { MunicipalityDetailComponent } from '../municipality-detail/municipality-detail.component';
import {MatPaginatorIntl, PageEvent} from '@angular/material/paginator';
import Swal from 'sweetalert2';


@Component({
  selector: 'ngx-municipality-list',
  templateUrl: './municipality-list.component.html',
  styleUrls: ['./municipality-list.component.scss']
})
export class MunicipalityListComponent extends BasePage {

  constructor(private service: MunicipalityService, public toastrService: NbToastrService,
    private windowService: NbWindowService, private paginator: MatPaginatorIntl) {
    super(toastrService);
    this.paginator.itemsPerPageLabel = "Registros por página";
  }

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

  municipalitys: any;
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
      key: {
        title: 'Clave',
        type: 'number',
        //editable: false,
        // width: '25px'
      },
      entity: {
        title: 'Entidad',
        type: 'string',
        editable: true,
      },
      municipalityName: {
        title: 'Nombre',
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
      }
    },
    noDataMessage: "No se encontrarón registros"
  };

  ngOnInit(): void {
    this.readMunicipality(0,10);
  }

  readMunicipality = ((pageIndex:number, pageSize:number) => {
    this.municipalitys = null;
    this.service.list(pageIndex, pageSize, 'municipality-sae').subscribe((municipalitys:any) =>  {
      this.municipalitys = municipalitys.data;
      this.length = municipalitys.count;
    }, 
    error => this.onLoadFailed('danger','Error conexión',error.message)
    );

  });

  changesPage (event){
    this.pageEvent = event;
    this.readMunicipality(event.pageIndex, event.pageSize)
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
          this.readMunicipality(this.pageEvent.pageIndex, this.pageEvent.pageSize);
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
    const modalRef = this.windowService.open(MunicipalityDetailComponent, { title: `Editar municipio`, context: { municipality: event.data }, buttons: buttonsConfig  }).onClose.subscribe(() => {
      this.readMunicipality(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });
  
  }

  openWindowMunicipality() {
    const modalRef = this.windowService.open(MunicipalityDetailComponent, { title: `Nueva municipio` }).onClose.subscribe(() => {
      this.readMunicipality(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });
    
  }

}