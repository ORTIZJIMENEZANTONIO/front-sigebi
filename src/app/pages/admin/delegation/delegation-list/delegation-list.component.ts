import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowService, NbWindowControlButtonsConfig } from '@nebular/theme';
import Swal from 'sweetalert2';
import { DelegationService } from '../../../../@core/backend/common/services/delegation.service';
import { Delegation } from '../../../../@core/interfaces/auction/Delegation.model';
import { BasePage } from '../../../../@core/shared/base-page';
import { DelegationDetailComponent } from '../delegation-detail/delegation-detail.component';

@Component({
  selector: 'ngx-delegation-list',
  templateUrl: './delegation-list.component.html',
  styleUrls: ['./delegation-list.component.scss']
})
export class DelegationListComponent extends BasePage {
  constructor(private service: DelegationService, public toastrService: NbToastrService,
    private windowService: NbWindowService, private paginator: MatPaginatorIntl) {
    super(toastrService);
    this.paginator.itemsPerPageLabel = "Registros por página";
    this.searchForm = new FormGroup({
      text: new FormControl()
    });
    this.searchForm.controls['text'].valueChanges.subscribe((value:string)=>{
      if(value.length > 0){
        this.service.search(value).subscribe((rows:Delegation[])=>{
          this.length = rows.length;
          this.rows = rows;
        })
      }else{
        this.readDelegation()
      }
    })
  }

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  searchForm:FormGroup;
 

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
        width: '25px'
      },
      description: {
        title: 'Desc',
        type: 'string',
      },
      numRegister: {
        title: 'No Registro',
        type: 'number',
      },
      zoneContractCVE: {
        title: 'Z. Contrato',
        type: 'number',
      },
      diffHours: {
        title: 'Dif Hora',
        type: 'number',
      },
      phaseEdo: {
        title: 'Etapa EDO',
        type: 'number',
      },
      zoneVigilanceCVE:{
        title:'Zona Vigilancia',
        type:'number'
      }
    },
    noDataMessage: "No se encontrarón registros"
  };

  ngOnInit(): void {
    this.readDelegation();
  }

  readDelegation = (() => {
    this.rows = null;
    this.service.list(this.pageEvent.pageIndex, this.pageEvent.pageSize).subscribe((delegation:any) =>  {
      this.rows = delegation.data;
      this.length = delegation.count;
    }, 
    error => this.onLoadFailed('danger','Error conexión',error.message)
    );

  });

  changesPage (event){
    if(event.pageSize!=this.pageSize){

    }
    this.pageEvent = event;
    this.readDelegation()
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
          this.readDelegation();
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
    this.windowService.open(DelegationDetailComponent, { title: `Editar delegacion`, context: { delegation: event.data }, buttons: buttonsConfig  }).onClose.subscribe(() => {
      this.readDelegation();
    });
  
  }

  openWindowDelegation() {
    this.windowService.open(DelegationDetailComponent, { title: `Nueva delegacion` }).onClose.subscribe(() => {
      this.readDelegation();
    });
    
  }


}
