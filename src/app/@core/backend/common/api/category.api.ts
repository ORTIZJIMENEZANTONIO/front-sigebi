import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { map } from 'rxjs/operators';
import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';

@Injectable()
export class CategoryApi {
  private readonly apiController: string = 'categories';


  constructor(private api: HttpService, private http: HttpClient) {}

  get categoryDataSource(): DataSource {
    return this.api.getServerDataSource(`${this.api.apiUrl}/${this.apiController}`);
  }

  list(pageNumber: number = 1, pageSize: number = 10): Observable<any[]> {
    const params = new HttpParams()
      .set('pageNumber', `${pageNumber}`)
      .set('pageSize', `${pageSize}`);

    return this.api.get(this.apiController, { params });
  }

  register = function (category: any): Observable<any>{
    return this.api.post(this.apiController, category);
  }
  /*
      return this.http
      .post<ServiceResponse>(this.config.apiProxy + 'request/requestGuarantee', JSON.stringify(request), { headers: HEADERS })
      .concatMap(result => {
        this.storage.remove(Constants.REQUESTSERVICE_KEY);
        return Observable.of(result);
      });
  */

  upload(formData: FormData): Observable<HttpEvent<any>> {

    this.api.post(this.apiController, formData);
    const req = new HttpRequest('POST', `${this.api.apiUrl}/${this.apiController}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }
}