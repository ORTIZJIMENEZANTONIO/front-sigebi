import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowControlButtonsConfig, NbWindowService } from '@nebular/theme';
import { OfficesService } from '../../../../@core/backend/common/services/offices.service';
import { OfficesModel } from '../../../../@core/interfaces/auction/offices.model';
import { BaseApp } from '../../../../@core/shared/base-app';
import { BasePage } from '../../../../@core/shared/base-page';

import { OfficesDeailComponent } from '../offices-deail/offices-deail.component';

@Component({
  selector: 'ngx-offices-list',
  templateUrl: './offices-list.component.html',
  styleUrls: ['./offices-list.component.scss']
})
export class OfficesListComponent extends BasePage {
  searchForm: FormGroup;
  constructor(private service: OfficesService, public toastrService: NbToastrService,
    private windowService: NbWindowService, private paginator: MatPaginatorIntl) {
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
      id: {
        title: 'Registro',
        type: 'number',
      },
      name: {
        title: 'Nombre',
        type: 'string',
      },
      street: {
        title: 'Calle',
        type: 'string',
      },
      noExt: {
        title: 'No. Exterior',
        type: 'string',
      },
      noInt: {
        title: 'No. Interior',
        type: 'string',
      },
      colony: {
        title: 'Colonia',
        type: 'string',
      },
      municipalDelegate: {
        title: 'Delegado Municipal',
        type: 'string',
      },
      postalCode: {
        title: 'Código Postal',
        type: 'number',
      },
      rfc: {
        title: 'RFC',
        type: 'string',
      },
      phone: {
        title: 'Teléfono',
        type: 'string',
      },
      phoneTwo: {
        title: 'Segundo Teléfono',
        type: 'string',
      },
      fax: {
        title: 'Segundo Teléfono',
        type: 'string',
      },
      typeOffice: {
        title: 'Tipo',
        type: 'string',
      },
      noRegistration: {
        title: 'Numero registro',
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
    this.service.list(pageIndex, pageSize).subscribe((dt: any) => {
      this.list = dt.data;
      this.length = dt.count;
    },
      error => this.onLoadFailed('danger', 'Error conexión', error.message)
    );

  });

  changesPage(event) {
    if (event.pageSize != this.pageSize) {

    }
    this.pageEvent = event;
    this.read(event.pageIndex * event.pageSize, event.pageSize)
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.service.delete(event.data.id).subscribe(data => {
        console.log(data);
        if (data.statusCode == 200) {
          this.onLoadFailed('success', 'Eliminado', data.message);
        } else {
          this.onLoadFailed('danger', 'Error', data.message);
        }
        this.read(this.pageEvent.pageIndex, this.pageEvent.pageSize);
      }, err => {
      })
    } else {
      event.confirm.reject();
    }
  }

  editRow(event) {
    const buttonsConfig: NbWindowControlButtonsConfig = {
      minimize: false,
      maximize: false,
      fullScreen: false,
    };
    const modalRef = this.windowService.open(OfficesDeailComponent, { title: `Editar`, context: { data: event.data }, buttons: buttonsConfig }).onClose.subscribe(() => {
      this.read(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });

  }

  openWindow() {
    const modalRef = this.windowService.open(OfficesDeailComponent, { title: `Nuevo` }).onClose.subscribe(() => {
      this.read(this.pageEvent.pageIndex = 0, this.pageEvent.pageSize);
    });

  }

}
