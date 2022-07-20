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
    
    list(pageNumber: number = 1, pageSize: number = 10, url:string) {
        const data = this.api.list(pageNumber, pageSize, url);
        return data;
    }
        
    listAll(url:string) {
        const data = this.api.listAll(url);
        return data;
    }
    register(locality: LocalityModel): Observable<LocalityModel>{
        return this.api.register(locality);
    }

    update(id:number, locality: LocalityModel): Observable<LocalityModel>{
        return this.api.update(id, locality);
    }

    delete(id:number){
        return this.api.delete(id);
    }
}