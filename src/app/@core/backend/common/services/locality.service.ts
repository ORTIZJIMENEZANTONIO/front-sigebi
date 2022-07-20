import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import { CatalogApi } from '../api/catalog-api';
import { LocalityModel } from '../../../interfaces/auction/locality.model';

@Injectable()
export class LocalityService {
    constructor(private api: CatalogApi) { }

    get gridDataSource(): DataSource {
        return this.api.dictamenDataSource;
    }
    url = "locality-sae";
    
    list(pageNumber: number = 1, pageSize: number = 10) {
        const data = this.api.list(pageNumber, pageSize, this.url);
        return data;
    }
        
    listAll() {
        const data = this.api.listAll(this.url);
        return data;
    }
    register(locality: LocalityModel): Observable<LocalityModel>{
        return this.api.register(locality,this.url);
    }

    update(id:number, locality: LocalityModel): Observable<LocalityModel>{
        return this.api.update(id, locality,this.url);
    }

    delete(id:number){
        return this.api.delete(id,this.url);
    }
}