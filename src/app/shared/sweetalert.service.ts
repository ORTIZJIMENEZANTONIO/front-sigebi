import { Injectable } from '@angular/core';
import Swal, { SweetAlertResult } from 'sweetalert2';
import { SweetalertModel } from '../@core/interfaces/auction/sweetalert-model';

@Injectable({
  providedIn: 'root'
})
export class SweetalertService {

  constructor() { }
  public showAlertBasic(sweetBean:SweetalertModel): void {
    Swal.fire(sweetBean);
  }

  public showAlertConfirm(sweetBean:SweetalertModel): Promise<SweetAlertResult> {
    return Swal.fire(sweetBean);
  }
}
