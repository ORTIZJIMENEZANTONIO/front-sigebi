import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import { City } from '../../../interfaces/auction/City.model';
import { CatalogApi } from '../api/catalog-api';
import { Departament } from '../../../interfaces/auction/departament.model';

@Injectable()
export class DepartamentService {
    constructor(private api: CatalogApi) { }
    url = 'departament'
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

    register(legendData: Departament): Observable<Departament>{
        return this.api.register(legendData, this.url);
    }

    update(id:number, data: Departament): Observable<Departament>{
        return this.api.update(`${id}/${data.numDelegation}/${data.numSubDelegation}/${data.phaseEdo}`, data,this.url);
    }

    delete(id:number){
        return this.api.delete(id, this.url);
    }
}