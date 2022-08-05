import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import { CatalogApi } from '../api/catalog-api';
import { InstitutionClassification } from '../../../interfaces/auction/institution-classification.model';

@Injectable()
export class InstitutionClassificationService {
    constructor(private api: CatalogApi) { }
    url = 'institution-classification'
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

    register(legendData: InstitutionClassification): Observable<InstitutionClassification>{
        return this.api.register(legendData, this.url);
    }

    update(id:number, legendData: InstitutionClassification): Observable<InstitutionClassification>{
        return this.api.update(id, legendData,this.url);
    }

    delete(id:number){
        return this.api.delete(id, this.url);
    }
}