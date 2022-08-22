import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import { CatalogApi } from '../api/catalog-api';
import { Management } from '../../../interfaces/auction/management.model';
import { LabeloKey } from '../../../interfaces/auction/labelokey.model';

@Injectable()
export class LabelOkeyService {
    constructor(private api: CatalogApi) { }

    get gridDataSource(): DataSource {
        return this.api.dataSource;
    }

    url = "label-okey";
    
    list(pageNumber: number = 1, pageSize: number = 10) {
        const data = this.api.list(pageNumber, pageSize,this.url);
        return data;
    }
    register(legendData: LabeloKey): Observable<LabeloKey>{
        return this.api.register(legendData, this.url);
    }

    update(id:number, legendData: LabeloKey): Observable<LabeloKey>{
        return this.api.update(id, legendData, this.url);
    }

    delete(id:number){
        return this.api.delete(id, this.url);
    }
    search(text:string){
        return this.api.search(text,this.url);
    }

}