import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-real-state-of-the-transferor',
  templateUrl: './real-state-of-the-transferor.component.html',
  styleUrls: ['./real-state-of-the-transferor.component.scss']
})
export class RealStateOfTheTransferorComponent implements OnInit {

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
      gestion: {
        title: 'No. Gestion',
        type: 'string'
      },
      description: {
        title: 'Descripcion de Bien Transferente',
        type: 'string'
      },
      numRequest:{
        title: 'No. Solicitud',
        type: 'string'
      },
     
      

    },
    noDataMessage: "No se encontrarón registros"
  };
  ngOnInit(): void {
  }

}
