import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import { CatalogApi } from '../api/catalog-api';
import { Doccompesationsat } from '../../../interfaces/auction/doccompesationsat.model';
import { Doccompensationsatxml } from '../../../interfaces/auction/doccompensationsatxml.model';

@Injectable()
export class DoccompensationsatxmlService {
    constructor(private api: CatalogApi) { }

    get gridDataSource(): DataSource {
        return this.api.dataSource;
    }

    url = "opinion";
    
    list(pageNumber: number = 1, pageSize: number = 10) {
        const data = this.api.list(pageNumber, pageSize,this.url);
        return data;
    }
    register(legendData: Doccompensationsatxml): Observable<Doccompensationsatxml>{
        return this.api.register(legendData, this.url);
    }

    update(id:number, legendData: Doccompensationsatxml): Observable<Doccompensationsatxml>{
        return this.api.update(id, legendData, this.url);
    }

    delete(id:number){
        return this.api.delete(id, this.url);
    }
}