import { Component, OnInit } from '@angular/core';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowControlButtonsConfig, NbWindowService } from '@nebular/theme';
import { GranteesService } from '../../../../@core/backend/common/services/grantees.service';
import { BasePage } from '../../../../@core/shared/base-page';
import { GranteesDeailComponent } from '../grantees-deail/grantees-deail.component';

@Component({
  selector: 'ngx-grantees-list',
  templateUrl: './grantees-list.component.html',
  styleUrls: ['./grantees-list.component.scss']
})
export class GranteesListComponent extends BasePage {
  constructor(private service: GranteesService, public toastrService: NbToastrService,
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
  list: any;
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
      },
      description: {
        title: 'Descripcion',
        type: 'string',
      },
      puesto: {
        title: 'Puesto',
        type: 'string',
      },
      type: {
        title: 'Tipo',
        type: 'string',
      },
      razonSocial: {
        title: 'Razon social',
        type: 'string',
      },
      street: {
        title: 'Calle',
        type: 'string',
      },
      noInside: {
        title: 'No Interior',
        type: 'string',
      },
      noExterior: {
        title: 'No Exterior',
        type: 'string',
      },
      col: {
        title: 'Colonia',
        type: 'string',
      },
      nommun: {
        title: 'NOMMUN',
        type: 'string',
      },
      nomedo: {
        title: 'NOMEDO',
        type: 'string',
      },
      cp: {
        title: 'CP',
        type: 'string',
      },
      usrStatus: {
        title: 'Usuario',
        type: 'string',
      }
    
    },
    noDataMessage: "No se encontrarón registros"
  };

  ngOnInit(): void {
    this.read(0,10); 
  }

  read = ((pageIndex:number, pageSize:number) => {
    this.list = null;
    this.service.list(pageIndex, pageSize).subscribe((dt:any) =>  {
      this.list = dt.data;
      this.length = dt.count;
    }, 
    error => this.onLoadFailed('danger','Error conexión',error.message)
    );

  });

  changesPage (event){
    if(event.pageSize!=this.pageSize){

    }
    this.pageEvent = event;
    this.read(event.pageIndex * event.pageSize, event.pageSize)
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.service.delete(event.data.id).subscribe(data =>{
        console.log(data);
        if(data.statusCode == 200){
          this.onLoadFailed('success','Eliminado',data.message);
        }else{
          this.onLoadFailed('danger','Error',data.message);
        }
        this.read(this.pageEvent.pageIndex, this.pageEvent.pageSize);
      },err =>{
      })
    } else {
      event.confirm.reject();
    }
  }

  editRow(event) {
    const buttonsConfig: NbWindowControlButtonsConfig = {
      minimize: false,
      maximize: false,
      fullScreen: false,
    };
    const modalRef = this.windowService.open(GranteesDeailComponent, { title: `Editar`, context: { data: event.data }, buttons: buttonsConfig  }).onClose.subscribe(() => {
      this.read(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });
  
  }

  openWindow() {
    const modalRef = this.windowService.open(GranteesDeailComponent, { title: `Nuevo` }).onClose.subscribe(() => {
      this.read(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });
    
  }
}
