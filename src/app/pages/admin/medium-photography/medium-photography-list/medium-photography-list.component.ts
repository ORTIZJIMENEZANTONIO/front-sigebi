import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowService, NbWindowControlButtonsConfig } from '@nebular/theme';
import Swal from 'sweetalert2';
import { MediumPhotographyService } from '../../../../@core/backend/common/services/medium-photography.service';
import { MediumPhotography } from '../../../../@core/interfaces/auction/medium-photography.model';
import { BasePage } from '../../../../@core/shared/base-page';
import { MediumPhotographyDetailComponent } from '../medium-photography-detail/medium-photography-detail.component';

@Component({
  selector: 'ngx-medium-photography-list',
  templateUrl: './medium-photography-list.component.html',
  styleUrls: ['./medium-photography-list.component.scss']
})
export class MediumPhotographyListComponent extends BasePage {

 
  constructor(private service: MediumPhotographyService, public toastrService: NbToastrService,
    private windowService: NbWindowService, private paginator: MatPaginatorIntl) {
    super(toastrService);
    this.paginator.itemsPerPageLabel = "Registros por página";
    this.searchForm = new FormGroup({
      text: new FormControl()
    });
    this.searchForm.controls['text'].valueChanges.subscribe((value: string) => {
      if (value.length > 0) {
        this.service.search(value).subscribe((rows: MediumPhotography[]) => {
          this.length = rows.length;
          this.rows = rows;
        })
      } else {
        this.readMediumPhotography()
      }
    })
  }

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  searchForm: FormGroup

  // MatPaginator Output
  pageEvent: PageEvent = {
    pageIndex: 0,
    pageSize: 10,
    length: 0
  };

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  rows: any;
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
        //editable: false,
        // width: '25px'
      },
      ruta: {
        title: 'Ruta',
        type: 'string',
      },
      estatus: {
        title: 'Estatus',
        type: 'string',
      },

    },
    noDataMessage: "No se encontrarón registros"
  };

  ngOnInit(): void {
    this.readMediumPhotography();
  }

  readMediumPhotography = (() => {
    this.rows = null;
    this.service.list(this.pageEvent.pageIndex, this.pageEvent.pageSize).subscribe((legends: any) => {
      this.rows = legends.data;
      this.length = legends.count;
    },
      error => this.onLoadFailed('danger', 'Error conexión', error.message)
    );

  });

  changesPage(event) {
    if (event.pageSize != this.pageSize) {

    }
    this.pageEvent = event;
    this.readMediumPhotography()
  }

  onDeleteConfirm(event): void {
    Swal.fire({
      title: 'Esta seguro de eliminar el registro?',
      text: "Esta acción no es revertible!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.delete(event.data.id).subscribe(data => {
          this.readMediumPhotography();
        }, err => {
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
    this.windowService.open(MediumPhotographyDetailComponent, { title: `Editar juzgado`, context: { notary: event.data }, buttons: buttonsConfig }).onClose.subscribe(() => {
      this.readMediumPhotography();
    });

  }

  openWindow() {
    this.windowService.open(MediumPhotographyDetailComponent, { title: `Nuevo juzgado` }).onClose.subscribe(() => {
      this.readMediumPhotography();
    });

  }
}
