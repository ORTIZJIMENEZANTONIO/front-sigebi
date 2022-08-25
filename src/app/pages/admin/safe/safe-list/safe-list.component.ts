import { Component } from '@angular/core';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowControlButtonsConfig, NbWindowService } from '@nebular/theme';
import { BasePage } from '../../../../@core/shared/base-page';
import { FormControl, FormGroup } from '@angular/forms';
import Swal, { SweetAlertResult } from 'sweetalert2';
import { SafeService } from '../../../../@core/backend/common/services/safe.service';
import { SafeDetailComponent } from '../safe-detail/safe-detail.component';
import { SweetAlertConstants, SweetalertModel } from '../../../../@core/interfaces/auction/sweetalert-model';
import { SweetalertService } from '../../../../shared/sweetalert.service';

@Component({
  selector: 'ngx-safe-list',
  templateUrl: './safe-list.component.html',
  styleUrls: ['./safe-list.component.scss']
})
export class SafeListComponent extends BasePage {
  searchForm: FormGroup;
  constructor(private service: SafeService, public toastrService: NbToastrService,
    private windowService: NbWindowService, private paginator: MatPaginatorIntl,
    private sweetalertService: SweetalertService) {
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
      idSafe: {
        title: 'Registro',
        type: 'string',
      },
      manager: {
        title: 'Encargado',
        type: 'string'
      },
      description: {
        title: 'Descripción',
        type: 'string'
      },
      ubication: {
        title: 'Ubicación',
        type: 'string',
      },
      registerNumber: {
        title: 'No. de registro',
        type: 'number',
      },
      municipalityCode: {
        title: 'Municipio',
        type: 'string',
      },
      localityCode: {
        title: 'Localidad',
        type: 'string',
      },
      stateCode: {
        title: 'Entidad',
        type: 'string',
      },
      cityCode: {
        title: 'Ciudad',
        type: 'string',
      },
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
        this.sweetAlertMessage(SweetAlertConstants.SWEET_ALERT_TITLE_OPS, error);
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
    this.sweetalertQuestion('Eliminar', 'Desea eliminar este registro?').then(
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
              this.sweetAlertSuccessMessage('Eliminado correctamente');
              this.read(this.pageEvent.pageIndex, this.pageEvent.pageSize);
            }, err => {
              let error = '';
              if (err.status === 0) {
                error = SweetAlertConstants.noConexion;
              } else {
                error = err.message;
              }
              this.sweetAlertMessage(SweetAlertConstants.SWEET_ALERT_TITLE_OPS, error);
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

  editRow(event) {
    const buttonsConfig: NbWindowControlButtonsConfig = {
      minimize: false,
      maximize: false,
      fullScreen: false,
    };
    const modalRef = this.windowService.open(SafeDetailComponent, { title: `Editar`, context: { data: event.data }, buttons: buttonsConfig }).onClose.subscribe(() => {
      this.read(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });

  }

  openWindow() {
    const modalRef = this.windowService.open(SafeDetailComponent, { title: `Nuevo` }).onClose.subscribe(() => {
      this.read(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });

  }
  private sweetAlertMessage(title: string, message: string) {
    let sweetalert = new SweetalertModel();
    sweetalert.title = title;
    sweetalert.text = message;
    sweetalert.icon = SweetAlertConstants.SWEET_ALERT_WARNING;
    sweetalert.showConfirmButton = true;
    sweetalert.showCancelButton = false;
    this.sweetalertService.showAlertBasic(sweetalert);
  }
  private sweetalertQuestion(title: string, message: string): Promise<SweetAlertResult> {
    let sweetalert = new SweetalertModel();
    sweetalert.title = title;
    sweetalert.text = message;
    sweetalert.icon = SweetAlertConstants.SWEET_ALERT_WARNING;
    sweetalert.showConfirmButton = true;
    sweetalert.showCancelButton = true;
    return this.sweetalertService.showAlertConfirm(sweetalert);
  }
  private sweetAlertSuccessMessage(title: string) {
    let sweetalert = new SweetalertModel();
    sweetalert.title = title;
    sweetalert.showConfirmButton = false;
    sweetalert.showCancelButton = false;
    sweetalert.timer = SweetAlertConstants.SWEET_ALERT_TIMER_1500;
    this.sweetalertService.showAlertBasic(sweetalert);
  }
}
