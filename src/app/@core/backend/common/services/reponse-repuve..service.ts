import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import { CatalogApi } from '../api/catalog-api'; 
import { ResponseRepuveInterface } from '../../../interfaces/auction/response-repuve.model';

@Injectable()
export class ResponseRepuveService {
  
  constructor( private api: CatalogApi ) { }

  protected url = "response-repuve";
  
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

  register( data: ResponseRepuveInterface ): Observable<ResponseRepuveInterface>{
    return this.api.register( data, this.url );
  }

  update(id:number, data: ResponseRepuveInterface): Observable<ResponseRepuveInterface>{
    return this.api.update( id, data, this.url );
  }

  delete(id:number){
    return this.api.delete( id, this.url );
  }
 
}