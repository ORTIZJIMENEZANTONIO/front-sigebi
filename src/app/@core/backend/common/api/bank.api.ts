import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';

@Injectable()
export class BankApi {

  private readonly apiController: string = 'bank';

  constructor(private api: HttpService, private http: HttpClient) {}
  
  get dataSource(): DataSource {
    return this.api.getServerDataSource(`${this.api.apiUrl}/${this.apiController}`);
  }

  list(pageNumber: number, pageSize: number): Observable<any[]> {
    const params = new HttpParams().set('inicio', `${pageNumber+1}`).set('pageSize', `${pageSize}`);
    return this.api.get(this.apiController, { params });
  }

  register(bank: any): Observable<any>{
    return this.api.post(this.apiController, bank);
  }

  update(id: number, bank:any){
    return this.api.put(this.apiController+'/'+id, bank);
  }

  delete(id: number){
    return this.api.delete(this.apiController+'/'+id);
  }

}