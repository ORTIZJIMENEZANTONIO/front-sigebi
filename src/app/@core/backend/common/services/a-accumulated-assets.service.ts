import { Injectable } from '@angular/core'; 
import { Observable, of } from 'rxjs';
import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';

import { CatalogApi } from '../api/catalog-api';
import { AAccumulatedAssetsInterface } from '../../../interfaces/auction/a-accumulated-assets.model';

@Injectable()
export class AAccumulatedAssetsService {

  constructor( private api: CatalogApi ) { }

  protected url = "a-accumulated-assets";
  
  get gridDataSource(): DataSource {
    return this.api.dataSource;
  }
    
  list( pageNumber: number = 1, pageSize: number = 10 ) {
    return this.api.list( pageNumber, pageSize, this.url );
  }

  search( text: string ){
    return this.api.search(text,this.url);
  }
  
  register( data: AAccumulatedAssetsInterface ): Observable<AAccumulatedAssetsInterface>{
    return this.api.register( data, this.url );
  }

  update( id: number | string, data: AAccumulatedAssetsInterface): Observable<AAccumulatedAssetsInterface>{
    return this.api.update( id, data, this.url );
  }

  delete( id: number | string ){
    return this.api.delete( id, this.url );
  }

}
