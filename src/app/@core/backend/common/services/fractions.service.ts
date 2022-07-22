import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import { CatalogApi } from '../api/catalog-api';
import { FractionsModel } from '../../../interfaces/auction/fractions.model';

@Injectable()
export class FractionsService {
    constructor(private api: CatalogApi) { }

    get gridDataSource(): DataSource {
        return this.api.dictamenDataSource;
    }
    
    list(pageNumber: number = 1, pageSize: number = 10, url:string) {
        const data = this.api.list(pageNumber, pageSize, url);
        return data;
    }
    register(fractions: FractionsModel): Observable<FractionsModel>{
        return this.api.register(fractions);
    }

    update(id:number, fractions: FractionsModel): Observable<FractionsModel>{
        return this.api.update(id, fractions);
    }

    delete(id:number){
        return this.api.delete(id);
    }
}