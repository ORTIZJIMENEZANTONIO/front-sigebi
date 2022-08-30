import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import { CatalogApi } from '../api/catalog-api'; 

import { RackInterface } from '../../../interfaces/auction/rack.model';

@Injectable()
export class RackService {
  
  constructor( private api: CatalogApi ) { }

  url = "rack";
  
  get gridDataSource(): DataSource {
    return this.api.dataSource;
  }
    
  list( pageNumber: number = 1, pageSize: number = 10 ) {
    const data = this.api.list( pageNumber, pageSize, this.url );
    return data;
  }

  search( text:string ){
    return this.api.search(text,this.url);
  }

  register( data: RackInterface ): Observable<RackInterface>{
    return this.api.register( data, this.url );
  }

  update( id: Object, data: RackInterface  ): Observable<RackInterface>{
    return this.api.updateCompose( id, data, this.url );
  }

  delete( id:number ){
    return this.api.delete( id, this.url );
  }

}