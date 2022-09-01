import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-turn-request',
  templateUrl: './turn-request.component.html',
  styleUrls: ['./turn-request.component.scss']
})
export class TurnRequestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
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
      user: {
        title: 'Usuario',
        type: 'string'
      },
      email: {
        title: 'Correo electrónico',
        type: 'string'
      }

    },
    noDataMessage: "No se encontrarón registros"
  };

}
