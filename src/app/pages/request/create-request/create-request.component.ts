import { Component, OnInit } from '@angular/core';
import { NbWindowControlButtonsConfig, NbWindowService } from '@nebular/theme';
import { Select2Data } from 'ng-select2-component';
import { GoodSubtypeService } from '../../../@core/backend/common/services/good-subtype.service';
import { GoodTypeService } from '../../../@core/backend/common/services/good-type.service';
import { RegulatoryService } from '../../../@core/backend/common/services/regulatory.service';
import { GoodSubtype } from '../../../@core/interfaces/auction/good-subtype.model';
import { GoodType } from '../../../@core/interfaces/auction/good-type.model';
import { RegulatoryInterface } from '../../../@core/interfaces/auction/regulatory.model';
import { AddressesOfTheRequestComponent } from '../addresses-of-the-request/addresses-of-the-request.component';
import { MassiveClassificationComponent } from '../massive-classification/massive-classification.component';
import { RealStateOfTheTransferorComponent } from '../real-state-of-the-transferor/real-state-of-the-transferor.component';

@Component({
  selector: 'ngx-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.scss']
})
export class CreateRequestComponent implements OnInit {


  data: Select2Data = [];

  filterData = []

  tipoBien = "";
  buttonsConfig: NbWindowControlButtonsConfig = {
    minimize: false,
    maximize: false,
    fullScreen: false,
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

  constructor(
    private windowService: NbWindowService,
    private regulatoryService: GoodSubtypeService
  ) { 
    this.regulatoryService.search("").subscribe((rows:GoodType[]) => {
      this.data = []
      rows.forEach(item =>{
        this.data.push({
          label:item.description,
          value:item.id
        })
      })
    })
  }


  blur(a:any, event:any){
   
    if(`${event.search}`.length == 0) this.filterData = this.data
    
    this.regulatoryService.search(event.search).subscribe((rows:GoodSubtype[]) => {
      this.data = []
      rows.forEach(item =>{
        this.data.push({
          label:item.description,
          value:item.id
        })
      })
    })

  }


  ngOnInit(): void {
  }
  change(event){
    this.tipoBien = event;
    console.log('====================================');
    console.log(event);
    console.log('====================================');
  }

  addressesOfTheRequest(){
    
    this.windowService.open(AddressesOfTheRequestComponent, { title: `Domicilios de la solicitud`, context: { requets: [] }, buttons: this.buttonsConfig  }).onClose.subscribe(() => {
      console.log('====================================');
      console.log("SOLICITUDES RESTANTES");
      console.log('====================================');
    });
  }
  realStateOfTheTransferor(){
  
    this.windowService.open(RealStateOfTheTransferorComponent, { title: `Bienes Inmuebles de la Transferente`, context: { requets: [] }, buttons: this.buttonsConfig  }).onClose.subscribe(() => {
      console.log('====================================');
      console.log("SOLICITUDES RESTANTES");
      console.log('====================================');
    });
  }
  massiveClassification(){
  
    this.windowService.open(MassiveClassificationComponent, { title: `Busca tu Clasificación`, context: { requets: [] }, buttons: this.buttonsConfig  }).onClose.subscribe(() => {
      console.log('====================================');
      console.log("SOLICITUDES RESTANTES");
      console.log('====================================');
    });
  }

}
