import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import { BatteryInterface } from '../../../interfaces/auction/battery.model';  
import { CatalogApi } from '../api/catalog-api'; 

@Injectable()
export class BatteryService {
  
  constructor( private api: CatalogApi ) { }

  protected url = "battery";
  
  get gridDataSource(): DataSource {
    return this.api.dataSource;
  }
    
  list(pageNumber: number = 1, pageSize: number = 10) {
    return this.api.list( pageNumber, pageSize, this.url );
  }

  register( data: BatteryInterface ): Observable<BatteryInterface>{
    return this.api.register( data, this.url );
  }

  update(id:number, data: BatteryInterface): Observable<BatteryInterface>{
    return this.api.update( id, data, this.url );
  }

  delete(id:number){
    return this.api.delete( id, this.url );
  }
}