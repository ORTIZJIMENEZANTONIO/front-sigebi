import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';

import { CatalogApi } from '../api/catalog-api';
import { IfaiSerieInterface } from '../../../interfaces/auction/ifai-serie.model'; 

@Injectable()
export class IfaiSerieService {

  constructor( private api: CatalogApi ) { }

  protected url = "series";
  
  get gridDataSource(): DataSource {
    return this.api.dataSource;
  }
    
  list(pageNumber: number = 1, pageSize: number = 10) {
    const data = this.api.list( pageNumber, pageSize, this.url );
    return data;
  }

  search( text:string ){
    return this.api.search(text,this.url);
  }
  
  register( data: IfaiSerieInterface ): Observable<IfaiSerieInterface>{
    return this.api.register( data, this.url );
  }

  update( id: number | string, data: IfaiSerieInterface ): Observable<IfaiSerieInterface>{
    return this.api.update( id, data, this.url );
  }

  delete( id: number | string ){
    return this.api.delete( id, this.url );
  }

}