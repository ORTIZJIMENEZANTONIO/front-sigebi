import { Component, OnInit } from '@angular/core';   
import { FormControl, FormGroup, } from '@angular/forms';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowControlButtonsConfig, NbWindowService,  } from '@nebular/theme';

import { BasePage } from '../../../../@core/shared/base-page';
import { SweetalertService } from '../../../../shared/sweetalert.service';
import { SweetAlertConstants, SweetalertModel } from '../../../../@core/interfaces/auction/sweetalert-model';

import { QAccumulatedGoodsDetailComponent } from '../q-accumulated-goods-detail/q-accumulated-goods-detail.component';
/*import { QAccumulatedGoodsInterface } from '../../../../@core/interfaces/auction/q-accumulated-goods.model';
import { QAccumulatedGoodsService } from '../../../../@core/backend/common/services/q-accumulated-goods.service'; */

import { Delegation } from '../../../../@core/interfaces/auction/Delegation.model';
import { DelegationService } from '../../../../@core/backend/common/services/delegation.service';

@Component({
  selector: 'ngx-q-accumulated-goods-list',
  templateUrl: './q-accumulated-goods-list.component.html',
  styleUrls: ['./q-accumulated-goods-list.component.scss']
})
export class QAccumulatedGoodsListComponent extends BasePage implements OnInit {

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
      columnTitle: 'Detalles',
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
        title: 'id',
        type: 'number',
        //editable: false,
        width: '25px'
      },
      description: {
        title: 'Delegación',
        type: 'string',
      },
      idSubDelegacion: { //cambio
        title: 'ids',
        type: 'number',
        width: '25px'
      },
      descripcionSubDelegacion: {
        title: 'Sub Delegación',
        type: 'number',
      },
      fechaInicial: {
        title: 'Fecha del',
        type: 'number',
      },
      fechaFinal: {
        title: 'Al',
        type: 'number',
      },
      
    },
    noDataMessage: "No se encontrarón registros"
  };

  constructor(
    private service: DelegationService,
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
        this.service.search(value).subscribe((rows: Delegation[]) => {
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
    const modalRef = this.windowService.open(QAccumulatedGoodsDetailComponent, { title: `Detalles`, context: { data: event.data }, buttons: buttonsConfig }).onClose.subscribe(() => {
      this.read(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });

  }

  public openWindow() { //Botón oculto
    const buttonsConfig: NbWindowControlButtonsConfig = {
      minimize: false,
      maximize: false,
      fullScreen: false,
    };
    const modalRef = this.windowService.open(QAccumulatedGoodsDetailComponent, { title: `Nuevo`, buttons: buttonsConfig }).onClose.subscribe(() => {
      this.read(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });

  }

}

