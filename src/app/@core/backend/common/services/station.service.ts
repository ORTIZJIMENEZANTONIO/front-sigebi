import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import { CatalogApi } from '../api/catalog-api'; 
import { StationInterface } from '../../../interfaces/auction/station.model'; 

@Injectable()
export class StationService {
  
  constructor( private api: CatalogApi ) { }

  url = "station";
  
  get gridDataSource(): DataSource {
    return this.api.dataSource;
  }
    
  list(pageNumber: number = 1, pageSize: number = 10) {
    const data = this.api.list( pageNumber, pageSize, this.url );
    return data;
  }

  register( data: StationInterface ): Observable<StationInterface>{
    return this.api.register( data, this.url );
  }

  update(id:number, data: StationInterface): Observable<StationInterface>{
    return this.api.update( id, data, this.url );
  }

  delete(id:number){
    return this.api.delete( id, this.url );
  }

  search(text:string){
    return this.api.search(text,this.url);
  }
}