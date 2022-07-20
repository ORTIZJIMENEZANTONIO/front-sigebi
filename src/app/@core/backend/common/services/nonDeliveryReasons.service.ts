import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import { CatalogApi } from '../api/catalog-api';
import { NonDeliveryReasonsModel } from '../../../interfaces/auction/NonDeliveryReasons.model';

@Injectable()
export class NonDeliveryReasonsService {
    constructor(private api: CatalogApi) { }

    get gridDataSource(): DataSource {
        return this.api.dictamenDataSource;
    }

    url = "non-delivery-reasons";

    list(pageNumber: number = 1, pageSize: number = 10) {
        const data = this.api.list(pageNumber, pageSize, this.url);
        return data;
    }
    register(legendData: NonDeliveryReasonsModel): Observable<NonDeliveryReasonsModel>{
        return this.api.register(legendData, this.url);
    }

    update(id:number, legendData: NonDeliveryReasonsModel): Observable<NonDeliveryReasonsModel>{
        return this.api.update(id, legendData, this.url);
    }

    delete(id:number){
        return this.api.delete(id, this.url);
    }
}