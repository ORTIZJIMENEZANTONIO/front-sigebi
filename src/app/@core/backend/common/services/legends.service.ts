import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import { LegendsApi } from '../api/legends.api';
import { LegendsModel } from '../../../interfaces/auction/legends.model';

@Injectable()
export class LegendsService {
    constructor(private api: LegendsApi) { }

    get gridDataSource(): DataSource {
        return this.api.legendsDataSource;
    }
    
    list(pageNumber: number = 1, pageSize: number = 10) {
        const data = this.api.list(pageNumber, pageSize);
        return data;
    }
    register(legendData: LegendsModel): Observable<LegendsModel>{
        return this.api.register(legendData);
    }

    update(id:number, legendData: LegendsModel): Observable<LegendsModel>{
        return this.api.update(id, legendData);
    }

    delete(id:number){
        return this.api.delete(id);
    }
}