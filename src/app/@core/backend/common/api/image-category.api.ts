import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { map } from 'rxjs/operators';
import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';

@Injectable()
export class ImageCategoryApi {
    private readonly apiController: string = 'images';
    private readonly apiCategories: string = 'images/categories';

    constructor(private api: HttpService) { }

    get categoryDataSource(): DataSource {
        return this.api.getServerDataSource(`${this.api.apiUrl}/${this.apiController}`);
    }

    list(pageNumber: number = 1, pageSize: number = 10): Observable<any[]> {
        const params = new HttpParams()
            .set('pageNumber', `${pageNumber}`)
            .set('pageSize', `${pageSize}`);

        return this.api.get(this.apiCategories, { params });
    }

}