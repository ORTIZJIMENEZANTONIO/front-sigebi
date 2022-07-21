import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import { CatalogApi } from '../api/catalog-api';
import { DeductiveInterface } from '../../../interfaces/auction/deductive.model';

@Injectable()
export class ClarificationService {
  
    constructor(private api: CatalogApi) { }

    protected url = "clarification"; 

    get gridDataSource(): DataSource {
        return this.api.dataSource;
    }
    
    list(pageNumber: number = 1, pageSize: number = 10) {
        const data = this.api.list(pageNumber, pageSize, this.url);
        return data;
    }
    register(legendData: DeductiveInterface): Observable<DeductiveInterface>{
        return this.api.register(legendData);
    }

    update(id:number, legendData: DeductiveInterface): Observable<DeductiveInterface>{
        return this.api.update(id, legendData);
    }

    delete(id:number){
        return this.api.delete(id);
    }
}