import { Observable } from 'rxjs';

import { GridData } from '../common/gridData';
import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';

export interface GoodSchedule {
    id: number;
    goodId: number;
    userCreate: string;
    createDate: Date;
    modifyUser: string;
    modifyDate: Date;
    version: number;
    actaId: number;
    messageSize: string;
    instanceSize: string;
    statusSize: string;
    status: string;
}

export abstract class GoodScheduleData {
  abstract get gridDataSource(): DataSource;
  abstract list(pageNumber: number, pageSize: number): Observable<GoodSchedule[]>;
}