import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import { City } from '../../../interfaces/auction/City.model';
import { CatalogApi } from '../api/catalog-api';
import { Person } from '../../../interfaces/auction/person.model';

@Injectable()
export class PersonService {
    constructor(private api: CatalogApi) { }
    url = 'person'
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

    register(legendData: Person): Observable<Person>{
        return this.api.register(legendData, this.url);
    }

    update(id:number, legendData: Person): Observable<Person>{
        return this.api.update(id, legendData,this.url);
    }

    delete(id:number){
        return this.api.delete(id, this.url);
    }
}