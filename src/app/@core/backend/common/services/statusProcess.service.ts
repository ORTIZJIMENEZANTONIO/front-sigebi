import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import { CatalogApi } from '../api/catalog-api';
import { StatusProcessModel } from '../../../interfaces/auction/statusProcess.model';

@Injectable()
export class StatusProcessService {
    constructor(private api: CatalogApi) { }

    get gridDataSource(): DataSource {
        return this.api.dictamenDataSource;
    }
    
    list(pageNumber: number = 1, pageSize: number = 10, url:string) {
        const data = this.api.list(pageNumber, pageSize, url);
        return data;
    }
    register(statusProcess: StatusProcessModel): Observable<StatusProcessModel>{
        return this.api.register(statusProcess);
    }

    update(id:number, statusProcess: StatusProcessModel): Observable<StatusProcessModel>{
        return this.api.update(id, statusProcess);
    }

    delete(id:number){
        return this.api.delete(id);
    }
}