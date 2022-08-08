import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GoodScheduleApi } from '../api/good-scheduler.api';
import { GoodScheduleData, GoodSchedule } from '../../../interfaces/goods/good-schedule';
import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import { switchMap, map } from 'rxjs/operators';

@Injectable()
export class GoodScheduleService extends GoodScheduleData {
    constructor(private api: GoodScheduleApi) {
        super();
    }

    get gridDataSource(): DataSource {
        return this.api.usersDataSource;
    }
//list(pageNumber: number, pageSize: number): Observable<GridData<GoodSchedule>>;
    list(pageNumber: number = 1, pageSize: number = 10): Observable<GoodSchedule[]> {
        return this.api.list(pageNumber, pageSize);
    }
}