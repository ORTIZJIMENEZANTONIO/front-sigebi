import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowControlButtonsConfig, NbWindowService } from '@nebular/theme';
import { TransferentesService } from '../../../../@core/backend/common/services/transferentes.service';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';
import { TransferentesInterface } from '../../../../@core/interfaces/auction/transferentes.model';
import { BasePage } from '../../../../@core/shared/base-page';
import { SweetalertService } from '../../../../shared/sweetalert.service';
import { TransferentesDetailComponent } from '../transferentes-detail/transferentes-detail.component';

@Component({
  selector: 'ngx-transferentes-list',
  templateUrl: './transferentes-list.component.html',
  styleUrls: ['./transferentes-list.component.scss']
})
export class TransferentesListComponent extends BasePage {
  public searchForm: FormGroup;
  public list: any;
  public length = 100;
  public pageSize = 10;
  public pageSizeOptions: number[] = [5, 10, 25, 100];
  // MatPaginator Output
  public pageEvent: PageEvent = {
    pageIndex: 0,
    pageSize: 10,
    length: 100
  };
  public settings = {
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
      },
      name: {
        title: 'Nombre',
        type: 'string',
      },
      keyCode: {
        title: 'Clave',
        type: 'string',
      },
      type:{
        title:'Tipo',
        type:'string',
      },
      version:{
        title:'Versión',
        type:'number',
      },
      status:{
        title:'Estado',
        type:'string',
      },
      operationStartDate:{
        title:'Fecha de inicio',
        type:'string',
      },
      operationEndDate:{
        title:'Fecha de fin',
        type:'string',
      },
      sedativePrincipal:{
        title:'Cedente principal',
        type:'string',
      },
      commissionedObject:{
        title:'Comisión secundaria',
        type:'string',
      },
      sector:{
        title:'Sector',
        type:'string',
      },
      formalization:{
        title:'Formalización',
        type:'string',
      },
      formalizationDate:{
        title:'Fecha de formalización',
        type:'date',
      },
      entity:{
        title:'Entidad',
        type:'string',
      },
      agreementModification:{
        title:'Modificación del convenio',
        type:'string',
      },
      agreementDate:{
        title:'Fecha de modificación del convenio',
        type:'date',
      },
      goodGuy:{
        title:'Tipo de bien',
        type:'string',
      },
      guardGuardWell:{
        title:'Guardia custodia bien',
        type:'string',     
      },
      destinyWelll:{
        title:'Destino del bien',
        type:'string',
      },
      daysAdminGood:{
        title:'Días de administración del bien',
        type:'string',
      },
      goodReceptionPlace:{
        title:'Lugar de recepción del bien',
        type:'string',
      }
      
    },
    noDataMessage: "No se encontrarón registros"
  };

  constructor(
    private service: TransferentesService,
    public toastrService: NbToastrService,
    private windowService: NbWindowService,
    private paginator: MatPaginatorIntl,
    public sweetalertService: SweetalertService
  ) {
    super(toastrService, sweetalertService);
    this.paginator.itemsPerPageLabel = "Registros por página";
    this.searchForm = new FormGroup({
      text: new FormControl()
    });
    this.searchForm.controls['text'].valueChanges.subscribe((value: string) => {
      if (value.length > 0) {
        // this.service.search(value).subscribe((rows: TransferentesInterface[]) => {
        //   this.length = rows.length;
        //   this.list = rows;
        // });
      } else {
        this.read(0, 10);
      }
    });
  }

  ngOnInit(): void {
    this.read(0, 10);
  }

  private read(pageIndex: number, pageSize: number) {
    this.list = null;
    this.service.list(pageIndex, pageSize).subscribe(
      (dt: any) => {
        this.list = dt.data;
        this.length = dt.count;
      },
      err => {
        let error = '';
        if (err.status === 0) {
          error = SweetAlertConstants.noConexion;
        } else {
          error = err.message;
        }
        this.onLoadFailed('danger', 'Error', error);
      }, () => {

      }
    );
  };

  public changesPage(event) {
    if (event.pageSize != this.pageSize) {

    }
    this.pageEvent = event;
    this.read(event.pageIndex, event.pageSize)
  }

  public onDeleteConfirm(event): void {
    this.sweetalertQuestion('warning', 'Eliminar', 'Desea eliminar este registro?').then(
      question => {
        if (question.isConfirmed) {
          this.service.delete(event.data.id).subscribe(
            data => {
              // if (data.statusCode == 200) {
              this.onLoadFailed('success', 'Eliminado', data.message);
              // } else {
              //   this.onLoadFailed('danger', 'Error', data.message);
              // }
            }, err => {
              let error = '';
              if (err.status === 0) {
                error = SweetAlertConstants.noConexion;
              } else {
                error = err.message;
              }
              this.onLoadFailed('danger', 'Error', error);
            }, () => {
              this.read(this.pageEvent.pageIndex, this.pageEvent.pageSize);
            });
        }
      }
    ).catch(
      e => {
        console.error(e);
      }
    );
  }

  public editRow(event) {
    const buttonsConfig: NbWindowControlButtonsConfig = {
      minimize: false,
      maximize: false,
      fullScreen: false,
    };
    const modalRef = this.windowService.open(TransferentesDetailComponent, { title: `Editar`, context: { data: event.data }, buttons: buttonsConfig }).onClose.subscribe(() => {
      this.read(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });

  }

  public openWindow() {
    const buttonsConfig: NbWindowControlButtonsConfig = {
      minimize: false,
      maximize: false,
      fullScreen: false,
    };
    const modalRef = this.windowService.open(TransferentesDetailComponent, { title: `Nuevo`, buttons: buttonsConfig }).onClose.subscribe(() => {
      this.read(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });

  }
}
