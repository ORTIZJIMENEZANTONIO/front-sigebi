import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import { CatalogApi } from '../api/catalog-api'; 

import { ResponseInterface } from '../../../interfaces/auction/response.model';

@Injectable()
export class ResponseService {
  
  constructor( private api: CatalogApi ) { }

  url = "response";
  
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

  register( data: ResponseInterface ): Observable<ResponseInterface>{
    return this.api.register( data, this.url );
  }

  update(id:Object, data: ResponseInterface): Observable<ResponseInterface>{
    console.log(id)
    return this.api.updateCompose( id, data, this.url );
  }

  delete(id:number){
    return this.api.delete( id, this.url );
  }

}