import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import { BankInterface } from '../../../interfaces/auction/bank.model';
import { CatalogApi } from '../api/catalog-api';
import { SatSubclasification } from '../../../interfaces/auction/sat-subclasification.model';

@Injectable()
export class SatSubclasificationService {

  constructor(private api: CatalogApi) { }

  protected url = "sat-subclassification";

  get gridDataSource(): DataSource {
    return this.api.dataSource;
  }
  
  search(text: string) {
    return this.api.search(text, this.url);
  }

  list(pageNumber: number = 1, pageSize: number = 10) {
    const data = this.api.list(pageNumber, pageSize, this.url);
    return data;
  }

  register(data: SatSubclasification): Observable<SatSubclasification> {
    return this.api.register(data, this.url);
  }

  update(id: number, data: SatSubclasification): Observable<SatSubclasification> {
    return this.api.update(id, data, this.url);
  }

  delete(id: number) {
    return this.api.delete(id, this.url);
  }

}