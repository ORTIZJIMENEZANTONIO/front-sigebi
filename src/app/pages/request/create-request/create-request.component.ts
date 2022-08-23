import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.scss']
})
export class CreateRequestComponent implements OnInit {

  tipoBien = "";

  rows: any;
  settings = {
    actions: {
      columnTitle: '',
      add: false,
      edit: false,
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
      confirmDelete: false,
    },
    columns: {
      check: {
        title: '',
        type: 'checkbox'
      },
      bankCode: {
        title: 'No. Gestion',
        type: 'string'
      },
      name: {
        title: 'Descripcion del bien Trasnferente',
        type: 'string',
        width:'300 px',
      },
      registerNumber: {
        title: 'Tipo Bien',
        type: 'number'
      },
      ifdsc: {
        title: 'Estado Fisico',
        type: 'string'
      },
      dateType: {
        title: 'Estado de Conservación',
        type: 'number',
      },
      code: {
        title: 'Unidad de Medida Trasnferente',
        type: 'number',
      },
      code1: {
        title: 'Cantidad de la Transferente',
        type: 'number',
      },
      state: {
        title: 'Destino Ligie',
        type: 'number',
      },
      tranferente: {
        title: 'Destino Transferente',
        type: 'number',
      },
      Emisora: {
        title: 'Menaje del Bien',
        type: 'number',
      }
      

    },
    noDataMessage: "No se encontrarón registros"
  };

  constructor() { }

  ngOnInit(): void {
  }
  change(event){
    this.tipoBien = event;
    console.log('====================================');
    console.log(event);
    console.log('====================================');
  }

}
