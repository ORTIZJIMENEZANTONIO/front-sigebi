import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import { ScoreInterface } from '../../../interfaces/auction/score.model'; 
import { CatalogApi } from '../api/catalog-api'; 

@Injectable()
export class ScoreService{
  
  constructor( private api: CatalogApi ) { }

  protected url = "score";
  
  get gridDataSource(): DataSource {
    return this.api.dataSource;
  }
    
  list(pageNumber: number = 1, pageSize: number = 10) {
    const data = this.api.list( pageNumber, pageSize, this.url );
    return data;
  }

  register( data: ScoreInterface ): Observable<ScoreInterface>{
    return this.api.register( data, this.url );
  }

  update(id:number, data: ScoreInterface): Observable<ScoreInterface>{
    return this.api.update( id, data, this.url );
  }

  delete(id:number){
    return this.api.delete( id, this.url );
  }

  search(text:string){
    return this.api.search(text,this.url);
}
}