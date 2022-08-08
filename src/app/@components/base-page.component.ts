import { Component, OnInit, OnDestroy, Injector, Type, ReflectiveInjector } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
//import { Global } from 'src/app/services/global';
//import { StaticInjectorService } from './static-injector';

import { AppInjector } from 'app/business/services/global/app-injector.service';
import {
  NbComponentStatus,
  NbGlobalLogicalPosition,
  NbGlobalPhysicalPosition,
  NbGlobalPosition,
  NbToastrService,
  NbToastrConfig,
} from '@nebular/theme';

@Component({
  template: ''
})
export class BasePage implements OnInit, OnDestroy {
  protected subscription: Subscription;
  //protected global: Global;
  protected toastr:NbToastrService;
  //injector: Injector;

  //injector = ReflectiveInjector.resolveAndCreate([Global,ToastrService]);

  config: NbToastrConfig;

  index = 1;
  destroyByClick = true;
  duration = 2000;
  hasIcon = true;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates = false;
  status: NbComponentStatus = 'primary';

  title = 'HI there!';
  content = `I'm cool toaster!`;

  types: NbComponentStatus[] = [
    'primary',
    'success',
    'info',
    'warning',
    'danger',
  ];
  positions: string[] = [
    NbGlobalPhysicalPosition.TOP_RIGHT,
    NbGlobalPhysicalPosition.TOP_LEFT,
    NbGlobalPhysicalPosition.BOTTOM_LEFT,
    NbGlobalPhysicalPosition.BOTTOM_RIGHT,
    NbGlobalLogicalPosition.TOP_END,
    NbGlobalLogicalPosition.TOP_START,
    NbGlobalLogicalPosition.BOTTOM_END,
    NbGlobalLogicalPosition.BOTTOM_START,
  ];

  quotes = [
    { title: null, body: 'We rock at Angular' },
    { title: null, body: 'Titles are not always needed' },
    { title: null, body: 'Toastr rock!' },
  ];


  constructor() {    
    //this.global = this.injector.get(Global);
    //this.global = AppInjector.injector.get(Global);
    this.toastr = AppInjector.injector.get(NbToastrService);
  }


  public ngOnInit() {
    this.subscribe();
  }

  protected subscribe() {
  }

  protected unsubscribe() {

    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public ngOnDestroy() {
    this.unsubscribe();
  }

  protected addlog = function (message: string, data?: any, isjson?: boolean) {

    if (undefined !== isjson && undefined !== data && isjson) {
      console.log(message + JSON.stringify(data));
    } else if (undefined !== data) {
      console.log(message + data);
    } else {
      console.log(message);
    }

  }

  protected trimData = function (data: any) {
    if (undefined === data || null === data) {
      return "";
    }
    return String(data).trim();
  }

  /*Toast Notfications */
  private showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      hasIcon: this.hasIcon,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
    };
    const titleContent = title ? `. ${title}` : '';

    this.index += 1;
    this.toastr.show(
      body,
      `Toast ${this.index}${titleContent}`,
      config);
  }
  showNotification(type, title, message) {
    this.showToast(type, title, message);
  }
/*
  showNotification(from, align, message, type) {

    const color = Math.floor((Math.random() * 5) + 1);

    //timeOut: 5000//deafult
    switch (type) {
      case 1:
        this.toastr.info('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span>' + message, '', {
          disableTimeOut: true,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-info alert-with-icon",
          positionClass: 'toast-' + from + '-' + align
        });
        break;
      case 2:
        this.toastr.success('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span>' + message, '', {
          disableTimeOut: true,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-success alert-with-icon",
          positionClass: 'toast-' + from + '-' + align
        });
        break;
      case 3:
        this.toastr.warning('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span>' + message, '', {
          disableTimeOut: true,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-warning alert-with-icon",
          positionClass: 'toast-' + from + '-' + align
        });
        break;
      case 4:
        this.toastr.error('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span>' + message, '', {
          disableTimeOut: false,
          enableHtml: true,
          closeButton: true,
          toastClass: "alert alert-danger alert-with-icon",
          positionClass: 'toast-' + from + '-' + align
        });
        break;
      case 5:
        this.toastr.show('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span>' + message, '', {
          disableTimeOut: true,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-primary alert-with-icon",
          positionClass: 'toast-' + from + '-' + align
        });
        break;
      default:
        break;
    }
  }

  */

  protected onLoadFailed(error: any): void {
    this.showToast('danger', 'Error', error.message);
  }

  /*
  protected onLoadFailedPos(error: any,posY:string, posX:string): void {
    this.showToast(posY, posX, error.message);
  }
  */

  //utils
  protected getDataFromArray(data: any, separator:string,index:number): string{
    let defValue = "";
    if(undefined === data || null === data){
      return defValue;
    }
    let arrData = data.split(separator);
    if (arrData.length > 0 && index+1<=arrData.length) {
      defValue = this.trimData(arrData[index].trim());
    }
    return defValue;
  }


  public formatDate(dateFormat) {
    let fecha ="";
    if(dateFormat == null){
    return this.returnDate(dateFormat) + " " +
      this.returnTime(dateFormat);
    }else{
      return this.returnDate(dateFormat) + " " +
      this.returnTime(dateFormat);
    }
  }

  public returnDate(dateToConvert: number): string {
    var date = new Date(dateToConvert);
    const processDate = this.fixit(date.getDate()) + "/" + this.fixit(date.getMonth() + 1) + "/" + date.getFullYear();
    return processDate;
  }

  public returnTime(dateToConvert: number): string {
    var date = new Date(dateToConvert);
    var hours         =  ("0" + date.getHours()).slice(-2);
    var minutes       =  ("0" + date.getMinutes()).slice(-2);
    return hours+":"+minutes;
  }


  protected fixit(n) {
    return (n < 10) ? '0' + n : n;
  }

}
