import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';

import { CatalogApi } from '../api/catalog-api';
import { ServiceCatInterface } from '../../../interfaces/auction/service.model';

@Injectable()
export class ServiceCatService {

  constructor( private api: CatalogApi ) { }

  protected url = "service-cat";
  
  get gridDataSource(): DataSource {
    return this.api.dataSource;
  }
    
  list( pageNumber: number = 1, pageSize: number = 10 ) {
    return this.api.list( pageNumber, pageSize, this.url );
  }

  search( text: string ){
    return this.api.search(text,this.url);
  }
  
  register( data: ServiceCatInterface ): Observable<ServiceCatInterface>{
    return this.api.register( data, this.url );
  }

  update( id: number | string, data: ServiceCatInterface): Observable<ServiceCatInterface>{
    return this.api.update( id, data, this.url );
  }

  delete( id: number | string ){
    return this.api.delete( id, this.url );
  }

}