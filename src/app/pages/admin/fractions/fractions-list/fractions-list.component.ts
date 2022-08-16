import { Component, OnInit } from '@angular/core';
import { NbToastrService, NbWindowControlButtonsConfig, NbWindowService} from '@nebular/theme';
import { BasePage } from '../../../../@core/shared/base-page';
import { FractionsService } from '../../../../@core/backend/common/services/fractions.service';
import { FractionsDetailComponent } from '../fractions-detail/fractions-detail.component';
import {MatPaginatorIntl, PageEvent} from '@angular/material/paginator';
import Swal from 'sweetalert2';
import { FractionsModel } from '../../../../@core/interfaces/auction/fractions.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-fractions-list',
  templateUrl: './fractions-list.component.html',
  styleUrls: ['./fractions-list.component.scss']
})
export class FractionsListComponent extends BasePage {

  constructor(private service: FractionsService, public toastrService: NbToastrService,
    private windowService: NbWindowService, private paginator: MatPaginatorIntl) {
    super(toastrService);
    this.paginator.itemsPerPageLabel = "Registros por página";
    this.searchForm = new FormGroup({
      text: new FormControl()
    });
    this.searchForm.controls['text'].valueChanges.subscribe((value:string)=>{
      if(value.length > 0){
        this.service.search(value).subscribe((rows:FractionsModel[])=>{
          this.length = rows.length;
          this.fractions = rows;
        })
      }else{
        this.readFraction()
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

  fractions: any;
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
      code: {
        title: 'Codigo',
        type: 'string',
        editable: true,
      },
      level: {
        title: 'Nivel',
        type: 'string',
        editable: true,
      },
      description: {
        title: 'Descripción',
        type: 'string',
        editable: true,
      },
      normId: {
        title: 'Norma',
        type: 'string',
        valuePrepareFunction:(value) =>{
          return value.norm
        }
      },
      unit: {
        title: 'Unidad',
        type: 'number',
      },
      clasificationId: {
        title: 'Clasificación',
        type: 'string',
      },
      version: {
        title: 'Versión',
        type: 'string',
      },
      relevantTypeId: {
        title: 'Tipo relevante',
        type: 'string',
      },
      codeErp1: {
        title: 'Codigo Erp1',
        type: 'string',
      },
      codeErp2: {
        title: 'Codigo Erp2',
        type: 'string',
      },
      codeErp3: {
        title: 'Codigo Erp3',
        type: 'string',
      },
      decimalAmount: {
        title: 'Cntidad decimal',
        type: 'string',
      },
      status: {
        title: 'Status',
        type: 'string',
      },
      fractionCode: {
        title: 'Codigo fracción',
        type: 'string',
      },
    },
    noDataMessage: "No se encontrarón registros"
  };

  ngOnInit(): void {
    this.readFraction();
  }

  readFraction = (() => {
    this.fractions = null;
    this.service.list(this.pageEvent.pageIndex, this.pageEvent.pageSize).subscribe((fractions:any) =>  {
      this.fractions = fractions.data;
      this.length = fractions.count;
    }, 
    error => this.onLoadFailed('danger','Error conexión',error.message)
    );

  });

  changesPage (event){
    this.pageEvent = event;
    this.readFraction()
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
          this.readFraction();
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
    const modalRef = this.windowService.open(FractionsDetailComponent, { title: `Editar fraccion`, context: { fraction: event.data }, buttons: buttonsConfig  }).onClose.subscribe(() => {
      this.readFraction();
    });
  
  }

  openWindowFractions() {
    const modalRef = this.windowService.open(FractionsDetailComponent, { title: `Nueva fraccion` }).onClose.subscribe(() => {
      this.readFraction();
    });
    
  }

}