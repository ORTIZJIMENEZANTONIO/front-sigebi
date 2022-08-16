import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import { CatalogApi } from '../api/catalog-api'; 
import { SaveValues } from '../../../interfaces/auction/save-values.model';

@Injectable()
export class SaveValuesService {
  
  constructor( private api: CatalogApi ) { }

  protected url = "save-values";
  
  get gridDataSource(): DataSource {
    return this.api.dataSource;
  }
    
  list(pageNumber: number = 1, pageSize: number = 10) {
    const data = this.api.list( pageNumber, pageSize, this.url );
    return data;
  }

  register( data: SaveValues ): Observable<SaveValues>{
    return this.api.register( data, this.url );
  }

  update(id: string, data: SaveValues): Observable<SaveValues>{
    return this.api.update( id, data, this.url );
  }

  delete(id: string){
    return this.api.delete( id, this.url );
  }

  search(text:string){
    return this.api.search(text,this.url);
  }
}