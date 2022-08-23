import { Component } from '@angular/core';
import { NbToastrService, NbWindowControlButtonsConfig, NbWindowService } from '@nebular/theme';
import { BasePage } from '../../../../@core/shared/base-page';
import { FractionsService } from '../../../../@core/backend/common/services/fractions.service';
import { FractionsDetailComponent } from '../fractions-detail/fractions-detail.component';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { FractionsModel } from '../../../../@core/interfaces/auction/fractions.model';
import { FormControl, FormGroup } from '@angular/forms';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';
import { SweetalertService } from '../../../../shared/sweetalert.service';

@Component({
  selector: 'ngx-fractions-list',
  templateUrl: './fractions-list.component.html',
  styleUrls: ['./fractions-list.component.scss']
})
export class FractionsListComponent extends BasePage {
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
    pager: {
      display: false,
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
        valuePrepareFunction: (value) => {
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

  constructor(
    private service: FractionsService,
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
        this.service.search(value).subscribe((rows: FractionsModel[]) => {
          this.length = rows.length;
          this.list = rows;
        });
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
    const modalRef = this.windowService.open(FractionsDetailComponent, { title: `Editar`, context: { data: event.data }, buttons: buttonsConfig }).onClose.subscribe(() => {
      this.read(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });

  }

  public openWindow() {
    const buttonsConfig: NbWindowControlButtonsConfig = {
      minimize: false,
      maximize: false,
      fullScreen: false,
    };
    const modalRef = this.windowService.open(FractionsDetailComponent, { title: `Nuevo`, buttons: buttonsConfig }).onClose.subscribe(() => {
      this.read(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });

  }
}