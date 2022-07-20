import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import { CatalogApi } from '../api/catalog-api';
import { MunicipalityModel } from '../../../interfaces/auction/municipality.model';

@Injectable()
export class MunicipalityService {
    constructor(private api: CatalogApi) { }

    get gridDataSource(): DataSource {
        return this.api.dictamenDataSource;
    }
    
    list(pageNumber: number = 1, pageSize: number = 10, url:string) {
        return this.api.list(pageNumber, pageSize, url);
    }
    listAll(url:string) {
        return this.api.listAll(url);
    }
    register(municipality: MunicipalityModel): Observable<MunicipalityModel>{
        return this.api.register(municipality);
    }

    update(id:number, municipality: MunicipalityModel): Observable<MunicipalityModel>{
        return this.api.update(id, municipality);
    }

    delete(id:number){
        return this.api.delete(id);
    }
}