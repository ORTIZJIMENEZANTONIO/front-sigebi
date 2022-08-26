import { Injectable } from '@angular/core'; //SIN FUNCION, HACE LO MISMO QUE EL SERVICIO DE DELEGATION POR EL MOMENTO
import { Observable, of } from 'rxjs';
import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';

import { CatalogApi } from '../api/catalog-api';
//import { AAccumulatedAssetsInterface } from '../../../interfaces/auction/a-accumulated-assets.model';
import { Delegation } from '../../../interfaces/auction/Delegation.model';

@Injectable()
export class AAccumulatedAssetsService {

  constructor( private api: CatalogApi ) { }

  protected url = "delegation";
  
  get gridDataSource(): DataSource {
    return this.api.dataSource;
  }
    
  list( pageNumber: number = 1, pageSize: number = 10 ) {
    return this.api.list( pageNumber, pageSize, this.url );
  }

  search( text: string ){
    return this.api.search(text,this.url);
  }
  
  register( data: Delegation ): Observable<Delegation>{
    return this.api.register( data, this.url );
  }

  update( id: number | string, data: Delegation): Observable<Delegation>{
    return this.api.update( id, data, this.url );
  }

  delete( id: number | string ){
    return this.api.delete( id, this.url );
  }

}
