import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import { GeneralStatusInterface } from '../../../interfaces/auction/general-status.model'; 
import { CatalogApi } from '../api/catalog-api'; 

@Injectable()
export class GeneralStatusService {
  
  constructor( private api: CatalogApi ) { }

  protected url = "general-status";
  
  get gridDataSource(): DataSource {
    return this.api.dataSource;
  }
    
  list(pageNumber: number = 1, pageSize: number = 10) {
    const data = this.api.list( pageNumber, pageSize, this.url );
    return data;
  }

  register( data: GeneralStatusInterface ): Observable<GeneralStatusInterface>{
    return this.api.register( data, this.url );
  }

  update(id:number, data: GeneralStatusInterface): Observable<GeneralStatusInterface>{
    return this.api.update( id, data, this.url );
  }

  delete(id:number){
    return this.api.delete( id, this.url );
  }
}