import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import { CatalogApi } from '../api/catalog-api'; 

<<<<<<< HEAD
import { SafeInterface } from '../../../interfaces/auction/safe.model';
=======
import { SettlementInterface } from '../../../interfaces/auction/settlement.model';
>>>>>>> d4fe1c789adbdcfe2c0f75e2b96ee870fd90b280

@Injectable()
export class SafeService {
  
  constructor( private api: CatalogApi ) { }

  url = "safe";
  
  get gridDataSource(): DataSource {
    return this.api.dataSource;
  }
    
  list(pageNumber: number = 1, pageSize: number = 10) {
    const data = this.api.list( pageNumber, pageSize, this.url );
    return data;
  }

<<<<<<< HEAD
  register( data: SafeInterface ): Observable<SafeInterface>{
    return this.api.register( data, this.url );
  }

  update(id:number, data: SafeInterface): Observable<SafeInterface>{
=======
  register( data: SettlementInterface ): Observable<SettlementInterface>{
    return this.api.register( data, this.url );
  }

  update(id:number, data: SettlementInterface): Observable<SettlementInterface>{
>>>>>>> d4fe1c789adbdcfe2c0f75e2b96ee870fd90b280
    return this.api.update( id, data, this.url );
  }

  delete(id:number){
    return this.api.delete( id, this.url );
  }
<<<<<<< HEAD
  
=======
>>>>>>> d4fe1c789adbdcfe2c0f75e2b96ee870fd90b280
}