import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-addresses-of-the-request',
  templateUrl: './addresses-of-the-request.component.html',
  styleUrls: ['./addresses-of-the-request.component.scss']
})
export class AddressesOfTheRequestComponent implements OnInit {

  constructor() { }

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
      alias: {
        title: 'Alias Almacén',
        type: 'string'
      },
      state: {
        title: 'Estado',
        type: 'string'
      },
      municipality:{
        title: 'Municipio',
        type: 'string'
      },
      colonia:{
        title: 'Colonia',
        type: 'string'
      },
      cp:{
        title: 'C.P.',
        type: 'string'
      },
      numExt:{
        title: 'Num. Ext.',
        type: 'string'
      },
      numInt:{
        title: 'Num. Int.',
        type: 'string'
      },
      

    },
    noDataMessage: "No se encontrarón registros"
  };

  ngOnInit(): void {
  }

}
