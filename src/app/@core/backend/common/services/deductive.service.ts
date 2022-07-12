import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import { DeductiveApi } from '../api/deductive.api';
import { DeductiveInterface } from '../../../interfaces/auction/deductive.model';


@Injectable()
export class DeductiveService {
    constructor(private api: DeductiveApi) { }

    get gridDataSource(): DataSource {
        return this.api.deductiveDataSource;
    }
    
    list(pageNumber: number = 1, pageSize: number = 10) {
        const data = this.api.list(pageNumber, pageSize);
        return data;
    }
    register(legendData: DeductiveInterface): Observable<DeductiveInterface>{
        return this.api.register(legendData);
    }

    update(id:number, legendData: DeductiveInterface): Observable<DeductiveInterface>{
        return this.api.update(id, legendData);
    }

    delete(id:number){
        return this.api.delete(id);
    }
}