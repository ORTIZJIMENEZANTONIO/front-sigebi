import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import { CatalogApi } from '../api/catalog-api';
import { MailboxInterface } from '../../../interfaces/auction/mailbox.model';
import { TypeOrderServiceInterface } from '../../../interfaces/auction/typeorderservices.model';

@Injectable()
export class TypeOrderServiceService {
    url = 'type-order-service';
    constructor(private api: CatalogApi) { }

    get gridDataSource(): DataSource {
        return this.api.dataSource;
    }
    
    list(pageNumber: number = 1, pageSize: number = 10) {
        const data = this.api.list(pageNumber, pageSize,this.url);
        return data;
    }
    register(legendData: TypeOrderServiceInterface): Observable<TypeOrderServiceInterface>{
        return this.api.register(legendData,this.url);
    }

    update(id:number, legendData: TypeOrderServiceInterface): Observable<TypeOrderServiceInterface>{
        return this.api.update(id, legendData,this.url);
    }

    delete(id:number){
        return this.api.delete(id,this.url);
    }

    search(text:string){
        return this.api.search(text,this.url);
    }
}