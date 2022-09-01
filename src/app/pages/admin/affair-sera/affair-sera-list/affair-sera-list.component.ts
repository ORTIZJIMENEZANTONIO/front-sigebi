import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormControl,
  FormGroup
} from '@angular/forms';
import {
  MatPaginatorIntl,
  PageEvent
} from '@angular/material/paginator';
import {
  NbToastrService,
  NbWindowControlButtonsConfig,
  NbWindowService
} from '@nebular/theme';
import {
  SweetAlertResult
} from 'sweetalert2';
import { AffairSeraService } from '../../../../@core/backend/common/services/affair-sera.service';
import { AffairSeraInterface } from '../../../../@core/interfaces/auction/affair-sera.model';
import {
  SweetAlertConstants,
  SweetalertModel
} from '../../../../@core/interfaces/auction/sweetalert-model';
import {
  BaseApp
} from '../../../../@core/shared/base-app';
import {
  BasePage
} from '../../../../@core/shared/base-page';
import {
  SweetalertService
} from '../../../../shared/sweetalert.service';
import { AffairSeraDetailComponent } from '../affair-sera-detail/affair-sera-detail.component';



@Component({
  selector: 'ngx-affair-sera-list',
  templateUrl: './affair-sera-list.component.html',
  styleUrls: ['./affair-sera-list.component.scss']
})
export class AffairSeraListComponent extends BasePage implements OnInit {
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
    hideSubHeader: true, //oculta subheaader de filtro
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
        title: 'Código',
        type: 'number',
      },
      description: {
        title: 'Descripción',
        type: 'string',
      },
      relationPropertyKey: {
        title: 'Clave',
        type: 'string',
      },
      referralNoteType: {
        title: 'Tipo de volante',
        type: 'string',
      },	  
      versionUser: {
        title: 'Versión usuario',
        type: 'string',
      },	
      creationUser: {
        title: 'Usuario',
        type: 'string',
      },
      creationDate: {
        title: 'Fecha',
        type: 'string',
      },
      editionUser: {
        title: 'Usuario modificación',
        type: 'string',
      },
      modificationDate: {
        title: 'Fecha modificación',
        type: 'string',
      },
      idRegister: {
        title: 'No. registro ',
        type: 'string',
      },

    },
    noDataMessage: "No se encontrarón registros"
  };
  constructor(
    private service: AffairSeraService,
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
        this.service.search(value).subscribe((rows: AffairSeraInterface[]) => {
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
              this.onLoadFailed('success', 'Eliminado', data.message);
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
    const modalRef = this.windowService.open(AffairSeraDetailComponent, {
      title: `Editar`,
      context: {
        data: event.data
      },
      buttons: buttonsConfig
    }).onClose.subscribe(() => {
      this.read(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });

  }

  public openWindow() {
    const buttonsConfig: NbWindowControlButtonsConfig = {
      minimize: false,
      maximize: false,
      fullScreen: false,
    };
    const modalRef = this.windowService.open(AffairSeraDetailComponent, { title: `Nuevo`, buttons: buttonsConfig }).onClose.subscribe(() => {
      this.read(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });

  }
}
