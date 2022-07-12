import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { DatePipe } from '@angular/common';

import {GoodScheduleService} from '../../../@core/backend/common/services/good-scheduler.service';
@Component({
  selector: 'ngx-goods-schedule',
  templateUrl: './goods-schedule.component.html',
  styleUrls: ['./goods-schedule.component.scss']
})
export class GoodsScheduleComponent implements OnInit {

  goods: any;

  settings = {
    actions: {
      columnTitle: '',
      add: false,
      edit: true,
      delete: true,
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
        title: 'Id',
        type: 'number',
        //editable: false,
      },
      goodId: {
        title: 'Id bien',
        type: 'number',
        //editable: false,
      },
      userCreate: {
        title: 'Usuario alta',
        type: 'string',
        //editable: false,
      },
      createDate: {
        title: 'Creacion',
        type: 'date',
        //editable: false,
        valuePrepareFunction: (cell: any, row: any) => {
          //var raw = new Date(row.fechaInicio);
          var formatted = new DatePipe('en-EN').transform(row.createDate, 'dd/MM/yyyy HH:mm:ss');
          //var formatted = new DatePipe('en-EN').transform(raw, 'dd MMM yyyy HH:mm:ss');
          return formatted;
        }
      },
      modifyUser: {
        title: 'Usuario modificación',
        type: 'string',
        //editable: false,
      },
      modifyDate: {
        title: 'Actualización',
        type: 'date',
        //editable: false,
        valuePrepareFunction: (cell: any, row: any) => {
          //var raw = new Date(row.fechaFin);
          var formatted = new DatePipe('en-EN').transform(row.modifyDate, 'dd/MM/yyyy HH:mm:ss');
          //var formatted = new DatePipe('en-EN').transform(raw, 'dd MMM yyyy HH:mm:ss');
          return formatted;
        }
      },
      version: {
        title: 'Version',
        type: 'number',
        //editable: false,
        //valuePrepareFunction: (cell: any, row: any) => { return row.tipoSubasta.nombre },
      },
      actaId: {
        title: 'Id acta',
        type: 'number',
        //editable: false,
      },
      messageSize: {
        title: 'Mensaje',
        type: 'string',
        //editable: false,
        //valuePrepareFunction: (cell: any, row: any) => { return row.estatusSubasta.nombre },
      },
      instanceSize: {
        title: 'Instancia',
        type: 'string',
        //editable: false,
      },
      statusSize: {
        title: 'Estatus size',
        type: 'string',
        //editable: false,
      },
      status: {
        title: 'Estatus',
        type: 'string',
        //editable: false,
      },
    },
  };

  constructor(private service: GoodScheduleService) {

  }

  ngOnInit(): void {
    console.log("ADMON GOODS");
    this.getGoods();
  }

  getGoods() {

    this.goods = null;
    this.service.list().subscribe(data => {
      //this.addlog("Subastas",data,true);
      console.log("Goods::" + JSON.stringify(data));
      var count = Object.keys(data).length;
      if (count > 0) {
        this.goods = data;
      }

    }, error => this.onLoadFailed(error));

  }

  protected onLoadFailed(error: any): void {
    console.log("ERROR:::" + error);
  }

  onDeleteConfirm(event): void {
    console.log("event::" + JSON.stringify(event.data));
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  editRow(event) {
    console.log('edit event: ', JSON.stringify(event.data))
  }

}
