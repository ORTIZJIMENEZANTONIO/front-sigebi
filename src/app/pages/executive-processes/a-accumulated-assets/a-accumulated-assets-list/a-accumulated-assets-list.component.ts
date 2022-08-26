import { Component, OnInit } from '@angular/core';  
import { FormControl, FormGroup, } from '@angular/forms';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowControlButtonsConfig, NbWindowService,  } from '@nebular/theme';

import { BasePage } from '../../../../@core/shared/base-page';
import { SweetalertService } from '../../../../shared/sweetalert.service';
import { SweetAlertConstants, SweetalertModel } from '../../../../@core/interfaces/auction/sweetalert-model';

import { AAccumulatedAssetsDetailComponent } from '../a-accumulated-assets-detail/a-accumulated-assets-detail.component';
import { AAccumulatedAssetsInterface } from '../../../../@core/interfaces/auction/a-accumulated-assets.model';
import { AAccumulatedAssetsService } from '../../../../@core/backend/common/services/a-accumulated-assets.service';

@Component({
  selector: 'ngx-a-accumulated-assets-list',
  templateUrl: './a-accumulated-assets-list.component.html',
  styleUrls: ['./a-accumulated-assets-list.component.scss']
})
export class AAccumulatedAssetsListComponent extends BasePage implements OnInit { 

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
      code: {
        title: 'Registro',
        type: 'striing',
      },
      description: {
        title: 'Descripción',
        type: 'string',
      },
      unaffordabilityCriterion: {
        title: 'Criterio de incosteabilidad',
        type: 'string',
      },
      subaccount: {
        title: 'Subcuenta',
        type: 'string',
      },
      registryNumber: {
        title: 'No. de registro',
        type: 'number',
      },
      cost: {
        title: 'Costo',
        type: 'string',
      },
    },
    noDataMessage: "No se encontrarón registros"
  };

  constructor(
    private service: AAccumulatedAssetsService,
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
    //Llama a la interfaz con sus datos
    this.searchForm.controls['text'].valueChanges.subscribe((value: string) => {
      if (value.length > 0) {
        this.service.search(value).subscribe((rows: AAccumulatedAssetsInterface[]) => {
          this.length = rows.length;
          this.list = rows;
        })
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
        const error = err.status === 0
          ? SweetAlertConstants.noConexion
          : err.message;
        this.onLoadFailed('danger', 'Error', error);
      }, () => {

      }
    );
  };

  public changesPage(event) {
    this.pageEvent = event;
    this.read(event.pageIndex, event.pageSize)
  }

  public onDeleteConfirm(event): void {
    this.sweetalertQuestion('warning', 'Eliminar', 'Desea eliminar este registro?').then(
      question => {
        if (question.isConfirmed) {
          this.service.delete(event.data.id).subscribe(
            data => {
              this.onLoadFailed('success', 'Eliminado', data.message);
            }, err => {
              const error = err.status === 0
                ? SweetAlertConstants.noConexion
                : err.message
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
    const modalRef = this.windowService.open(AAccumulatedAssetsDetailComponent, { title: `Editar`, context: { data: event.data }, buttons: buttonsConfig }).onClose.subscribe(() => {
      this.read(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });

  }

  public openWindow() {
    const buttonsConfig: NbWindowControlButtonsConfig = {
      minimize: false,
      maximize: false,
      fullScreen: false,
    };
    const modalRef = this.windowService.open(AAccumulatedAssetsDetailComponent, { title: `Nuevo`, buttons: buttonsConfig }).onClose.subscribe(() => {
      this.read(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });

  }

}
