import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import { CatalogApi } from '../api/catalog-api';
import { MunicipalityModel } from '../../../interfaces/auction/municipality.model';

@Injectable()
export class MunicipalityService {
    constructor(private api: CatalogApi) { }

    get gridDataSource(): DataSource {
        return this.api.dataSource;
    }
    url = "municipality-sae";
    
    list(pageNumber: number = 1, pageSize: number = 10) {
        return this.api.list(pageNumber, pageSize, this.url);
    }
    search(text:string){
        return this.api.search(text,this.url);
    }
    listAll() {
        return this.api.listAll(this.url);
    }
    register(municipality: MunicipalityModel): Observable<MunicipalityModel>{
        return this.api.register(municipality, this.url);
    }

    update(id:number, municipality: MunicipalityModel): Observable<MunicipalityModel>{
        return this.api.update(id, municipality, this.url);
    }

    delete(id:number){
        return this.api.delete(id, this.url);
    }
}