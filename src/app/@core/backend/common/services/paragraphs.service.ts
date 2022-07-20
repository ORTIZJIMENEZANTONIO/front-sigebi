import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import { CatalogApi } from '../api/catalog-api';
import { ParagraphsModel } from '../../../interfaces/auction/paragraphs.model';

@Injectable()
export class ParagraphsService {
    constructor(private api: CatalogApi) { }

    get gridDataSource(): DataSource {
        return this.api.dictamenDataSource;
    }
    
    list(pageNumber: number = 1, pageSize: number = 10, url:string) {
        const data = this.api.list(pageNumber, pageSize, url);
        return data;
    }
    register(legendData: ParagraphsModel): Observable<ParagraphsModel>{
        return this.api.register(legendData);
    }

    update(id:number, legendData: ParagraphsModel): Observable<ParagraphsModel>{
        return this.api.update(id, legendData);
    }

    delete(id:number){
        return this.api.delete(id);
    }
}