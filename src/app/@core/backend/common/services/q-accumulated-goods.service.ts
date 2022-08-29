import { Injectable } from '@angular/core'; 
import { Observable, of } from 'rxjs';
import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';

import { CatalogApi } from '../api/catalog-api';
import { QAccumulatedGoodsInterface } from '../../../interfaces/auction/q-accumulated-goods.model';

@Injectable()
export class QAccumulatedGoodsService {


  constructor( private api: CatalogApi ) { }

  protected url = "q-accumulated-goods";
  
  get gridDataSource(): DataSource {
    return this.api.dataSource;
  }
    
  list( pageNumber: number = 1, pageSize: number = 10 ) {
    return this.api.list( pageNumber, pageSize, this.url );
  }

  search( text: string ){
    return this.api.search(text,this.url);
  }
  
  register( data: QAccumulatedGoodsInterface ): Observable<QAccumulatedGoodsInterface>{
    return this.api.register( data, this.url );
  }

  update( id: number | string, data: QAccumulatedGoodsInterface): Observable<QAccumulatedGoodsInterface>{
    return this.api.update( id, data, this.url );
  }

  delete( id: number | string ){
    return this.api.delete( id, this.url );
  }
}
