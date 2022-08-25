import { Component, OnInit } from '@angular/core';
import { BasePage } from '../../../../@core/shared/base-page';
import { ScoreService } from '../../../../@core/backend/common/services/score.service';
import { ScoreDetailComponent } from '../score-detail/score-detail.component';
import { FormGroup, FormControl } from '@angular/forms';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowService, NbWindowControlButtonsConfig } from '@nebular/theme';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';
import { SweetalertService } from '../../../../shared/sweetalert.service';


@Component({
  selector: 'ngx-score-list',
  templateUrl: './score-list.component.html',
  styleUrls: ['./score-list.component.scss']
})
export class ScoreListComponent extends BasePage {
  searchForm: FormGroup;
  constructor(private service: ScoreService, public toastrService: NbToastrService,
    private windowService: NbWindowService, private paginator: MatPaginatorIntl,
    public sweetalertService: SweetalertService) {
    super(toastrService);
    this.paginator.itemsPerPageLabel = "Registros por página";
    this.searchForm = new FormGroup({
      text: new FormControl()
    });
  }

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent = {
    pageIndex: 0,
    pageSize: 10,
    length: 100
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
        title: 'Puntuacion',
        type: 'string',
      },
      initialRank: {
        title: 'Rango Inicial',
        type: 'string'
      },
      endRank: {
        title: 'Rango Final',
        type: 'string'
      },
      clasification: {
        title: 'Clasificacion',
        type: 'string',
      },
      registryNumber: {
        title: 'No. de registro',
        type: 'number',
      }
    },
    noDataMessage: "No se encontrarón registros"
  };
  ngOnInit(): void {
    this.read(0, 10);
  }
  read = ((pageIndex: number, pageSize: number) => {
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
      }
    );

  });

  changesPage(event) {
    if (event.pageSize != this.pageSize) {

    }
    this.pageEvent = event;
    this.read(event.pageIndex * event.pageSize, event.pageSize)
  }

  onDeleteConfirm(event): void {
    this.sweetalertQuestion('warning', 'Eliminar', 'Desea eliminar este registro?').then(
      question => {
        // console.log(question);
        if (question.isConfirmed) {
          this.service.delete(event.data.id).subscribe(
            data => {
              // console.log(data);
              // if (data.statusCode == 200) {
              //   this.onLoadFailed('success', 'Eliminado', data.message);
              // } else {
              //   this.onLoadFailed('danger', 'Error', data.message);
              // }
              this.onLoadFailed('success', 'Eliminado', data.message);
              this.read(this.pageEvent.pageIndex, this.pageEvent.pageSize);
            }, err => {
              let error = '';
              if (err.status === 0) {
                error = SweetAlertConstants.noConexion;
              } else {
                error = err.message;
              }
              this.onLoadFailed('danger', 'Error', error);
            });
        }
      }
    ).catch(
      e => {
        console.error(e);
      }
    ).finally(
      () => {
        console.log('finaliza');
      }
    );
  }

  public editRow(event) {
    const buttonsConfig: NbWindowControlButtonsConfig = {
      minimize: false,
      maximize: false,
      fullScreen: false,
    };
    const modalRef = this.windowService.open(ScoreDetailComponent, { title: `Editar`, context: { data: event.data }, buttons: buttonsConfig }).onClose.subscribe(() => {
      this.read(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });

  }
  openWindow() {
    const modalRef = this.windowService.open(ScoreDetailComponent, { title: `Nuevo` }).onClose.subscribe(() => {
      this.read(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });

  }

}
