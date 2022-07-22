import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import { CatalogApi } from '../api/catalog-api'; 
import { ZipCodeInterface } from '../../../interfaces/auction/zip.-code.model'; 

@Injectable()
export class ZipCodeService {
  
  constructor( private api: CatalogApi ) { }

  url = "zip-code";
  
  get gridDataSource(): DataSource {
    return this.api.dataSource;
  }
    
  list(pageNumber: number = 1, pageSize: number = 10) {
    const data = this.api.list( pageNumber, pageSize, this.url );
    return data;
  }

  register( data: ZipCodeInterface ): Observable<ZipCodeInterface>{
    return this.api.register( data, this.url );
  }

  update(id:number, data: ZipCodeInterface): Observable<ZipCodeInterface>{
    return this.api.update( id, data, this.url );
  }

  delete(id:number){
    return this.api.delete( id, this.url );
  }
}