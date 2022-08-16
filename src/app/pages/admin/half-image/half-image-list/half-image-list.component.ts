import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowService, NbWindowControlButtonsConfig } from '@nebular/theme';
import Swal from 'sweetalert2';
import { HalfImageService } from '../../../../@core/backend/common/services/half-image.service';
import { HalfImage } from '../../../../@core/interfaces/auction/half-image.model';
import { BasePage } from '../../../../@core/shared/base-page';
import { HalfImageDetailComponent } from '../half-image-detail/half-image-detail.component';

@Component({
  selector: 'ngx-half-image-list',
  templateUrl: './half-image-list.component.html',
  styleUrls: ['./half-image-list.component.scss']
})
export class HalfImageListComponent extends BasePage {


  constructor(private service: HalfImageService, public toastrService: NbToastrService,
    private windowService: NbWindowService, private paginator: MatPaginatorIntl) {
    super(toastrService);
    this.paginator.itemsPerPageLabel = "Registros por página";
    this.searchForm = new FormGroup({
      text: new FormControl()
    });
    this.searchForm.controls['text'].valueChanges.subscribe((value: string) => {
      if (value.length > 0) {
        this.service.search(value).subscribe((rows: HalfImage[]) => {
          this.length = rows.length;
          this.rows = rows;
        })
      } else {
        this.readHalfImage()
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
      route: {
        title: 'Ruta',
        type: 'string',
      },
      status: {
        title: 'Estatus',
        type: 'string',
      },

    },
    noDataMessage: "No se encontrarón registros"
  };

  ngOnInit(): void {
    this.readHalfImage();
  }

  readHalfImage = (() => {
    this.rows = null;
    this.service.list(this.pageEvent.pageIndex, this.pageEvent.pageSize).subscribe((halfImage: any) => {
      this.rows = halfImage.data;
      this.length = halfImage.count;
    },
      error => this.onLoadFailed('danger', 'Error conexión', error.message)
    );

  });

  changesPage(event) {
    if (event.pageSize != this.pageSize) {

    }
    this.pageEvent = event;
    this.readHalfImage()
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
          this.readHalfImage();
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
    this.windowService.open(HalfImageDetailComponent, { title: `Editar medio imagen`, context: { notary: event.data }, buttons: buttonsConfig }).onClose.subscribe(() => {
      this.readHalfImage();
    });

  }

  openWindow() {
    this.windowService.open(HalfImageDetailComponent, { title: `Nuevo medio imagen` }).onClose.subscribe(() => {
      this.readHalfImage();
    });

  }
}
