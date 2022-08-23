import { Component } from '@angular/core';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowControlButtonsConfig, NbWindowService } from '@nebular/theme';
import { BasePage } from '../../../../@core/shared/base-page';

import { WarehouseDetailComponent } from '../warehouse-detail/warehouse-detail.component';
import { WarehouseService } from '../../../../@core/backend/common/services/warehouse.service';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';
import { WarehouseInterface } from '../../../../@core/interfaces/auction/warehouse.model';
import { SweetalertService } from '../../../../shared/sweetalert.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-warehouse-list',
  templateUrl: './warehouse-list.component.html',
  styleUrls: ['./warehouse-list.component.scss']
})
export class WarehouseListComponent extends BasePage {
  public searchForm: FormGroup;
  public warehouses: any;
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
      idWarehouse: {
        title: 'Registro',
        type: 'string'
      },
      description: {
        title: 'Descripción',
        type: 'string',
      },
      ubication: {
        title: 'Ubicación',
        type: 'string'
      },
      manager: {
        title: 'Encargado',
        type: 'string'
      },
      registerNumber: {
        title: 'No. de registro',
        type: 'string'
      },
      stateCode: {
        title: 'Creado Estado',
        type: 'string',
      },
      cityCode: {
        title: 'Ciudad',
        type: 'string',
      },
      municipalityCode: {
        title: 'Municipio',
        type: 'string'
      },
      localityCode: {
        title: 'Localidad',
        type: 'string',
      },
      indActive: {
        title: 'Activo',
        type: 'string',
      },
      type: {
        title: 'Tipo',
        type: 'string',
      },
      responsibleDelegation: {
        title: 'Delegación reponsable',
        type: 'string',
      },
    },
    noDataMessage: "No se encontrarón registros"
  };

  constructor(
    private service: WarehouseService,
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
        // this.service.search(value).subscribe((rows: WarehouseInterface[]) => {
        //   this.length = rows.length;
        //   this.warehouses = rows;
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
    this.warehouses = null;
    this.service.list(pageIndex, pageSize).subscribe(
      (dt: any) => {
        this.warehouses = dt.data;
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
    const modalRef = this.windowService.open(WarehouseDetailComponent, { title: `Editar`, context: { data: event.data }, buttons: buttonsConfig }).onClose.subscribe(() => {
      this.read(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });

  }

  public openWindow() {
    const buttonsConfig: NbWindowControlButtonsConfig = {
      minimize: false,
      maximize: false,
      fullScreen: false,
    };
    const modalRef = this.windowService.open(WarehouseDetailComponent, { title: `Nuevo`, buttons: buttonsConfig }).onClose.subscribe(() => {
      this.read(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });

  }
}
