import { Component } from '@angular/core';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowControlButtonsConfig, NbWindowService } from '@nebular/theme';
import { BasePage } from '../../../../@core/shared/base-page';
import { FormControl, FormGroup } from '@angular/forms';
import { BatteryInterface } from '../../../../@core/interfaces/auction/battery.model';
import { BatteryService } from '../../../../@core/backend/common/services/battery.service';
import { BatteryDetailComponent } from '../battery-detail/battery-detail.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-battery-list',
  templateUrl: './battery-list.component.html',
  styleUrls: ['./battery-list.component.scss']
})
export class BatteryListComponent extends BasePage {
  rows: any;

  constructor(private service: BatteryService, public toastrService: NbToastrService,
    private windowService: NbWindowService, private paginator: MatPaginatorIntl)
   {
    super(toastrService);
    this.paginator.itemsPerPageLabel = "Registros por página";
    this.searchForm = new FormGroup({
      text: new FormControl()
    });
    this.searchForm.controls['text'].valueChanges.subscribe((value:string)=>{
      if(value.length > 0){
        this.service.search(value).subscribe((rows:BatteryInterface[])=>{
          this.length = rows.length;
          this.rows = rows;
        })
      }else{
        this.readBattery()
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

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput)
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

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
      idBattery: {
        title: 'Id Bateria',
        type: 'number'
      },
      storeCode: {
        title: 'Código de almacenamiento',
        type: 'string',
      },
      description: {
        title: 'Descripción',
        type: 'string'
      },
      status: {
        title: 'Estatus',
        type: 'string'
      },
      registerNumber: {
        title: 'No. de registro',
        type: 'number',
      },
    },
    noDataMessage: "No se encontrarón registros"
  };

  ngOnInit(): void {
    this.readBattery();
  }

  readBattery = (() => {
 
    this.service.list(this.pageEvent.pageIndex, this.pageEvent.pageSize).subscribe((batteries:any) =>  {
      this.rows = batteries.data;
      this.length = batteries.count;
    }, 
    error => this.onLoadFailed('danger','Error conexión',error.message)
    );

  });

  changesPage (event){
    if(event.pageSize!=this.pageSize){

    }
    this.pageEvent = event;
    this.readBattery()
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
          this.readBattery();
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
    this.windowService.open(BatteryDetailComponent, { title: `Editar batería`, context: { battery: event.data }, buttons: buttonsConfig  }).onClose.subscribe(() => {
      this.readBattery();
    });
  
  }

  openWindow() {
    this.windowService.open(BatteryDetailComponent, { title: `Nueva batería` }).onClose.subscribe(() => {
      this.readBattery();
    });
    
  }

}
