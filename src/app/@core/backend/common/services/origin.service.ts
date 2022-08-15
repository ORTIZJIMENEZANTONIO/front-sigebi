import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import { CatalogApi } from '../api/catalog-api'; 

import { OriginInterface } from '../../../interfaces/auction/origin.model';

@Injectable()
export class OriginService {
  
  constructor( private api: CatalogApi ) { }

  url = "origin";
  
  get gridDataSource(): DataSource {
    return this.api.dataSource;
  }
    
  list(pageNumber: number = 1, pageSize: number = 10) {
    const data = this.api.list( pageNumber, pageSize, this.url );
    return data;
  }

  search(text:string){
    return this.api.search(text,this.url);
  }

  register( data: OriginInterface ): Observable<OriginInterface>{
    return this.api.register( data, this.url );
  }

  update(id:number, data: OriginInterface): Observable<OriginInterface>{
    return this.api.update( id, data, this.url );
  }

  delete(id:number){
    return this.api.delete( id, this.url );
  }

}