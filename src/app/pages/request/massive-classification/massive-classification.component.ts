import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'ngx-massive-classification',
  templateUrl: './massive-classification.component.html',
  styleUrls: ['./massive-classification.component.scss']
})
export class MassiveClassificationComponent implements OnInit {

  constructor() { }
  length = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent = {
    pageIndex:0,
    pageSize:10,
    length:100
  };
  
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
      fraccion: {
        title: 'No. Fracción',
        type: 'string'
      },
      code: {
        title: 'Código',
        type: 'string'
      },
      level:{
        title: 'Nivel',
        type: 'string'
      },
      type:{
        title: 'Relevante',
        type: 'string'
      },
      description:{
        title: 'Descripción',
        type: 'string'
      }
    },
    noDataMessage: "No se encontrarón registros"
  };


  ngOnInit(): void {
  }

    
  changesPage (event){
  }

}
