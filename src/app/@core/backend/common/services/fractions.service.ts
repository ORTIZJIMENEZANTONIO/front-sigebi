import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import { CatalogApi } from '../api/catalog-api';
import { FractionsModel } from '../../../interfaces/auction/fractions.model';

@Injectable()
export class FractionsService {
    url = 'fractions';
    constructor(private api: CatalogApi) { }

    get gridDataSource(): DataSource {
        return this.api.dataSource;
    }
    
    list(pageNumber: number = 1, pageSize: number = 10) {
        const data = this.api.list(pageNumber, pageSize, this.url);
        return data;
    }
    search(text:string){
        return this.api.search(text,this.url);
    }
    register(fractions: FractionsModel): Observable<FractionsModel>{
        return this.api.register(fractions, this.url);
    }

    update(id:number, fractions: FractionsModel): Observable<FractionsModel>{
        return this.api.update(id, fractions,this.url);
    }

    delete(id:number){
        return this.api.delete(id,this.url);
    }
}