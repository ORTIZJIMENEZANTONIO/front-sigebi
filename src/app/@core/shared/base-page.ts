import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from 'rxjs/Subscription';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrService } from '@nebular/theme';
import { BaseApp } from "./base-app";
import { SweetAlertIcon, SweetAlertResult } from "sweetalert2";
import { SweetAlertConstants, SweetalertModel } from "../interfaces/auction/sweetalert-model";
import { SweetalertService } from "../../shared/sweetalert.service";

@Component({
    template: ''
})
export abstract class BasePage extends BaseApp implements OnInit, OnDestroy {

    //message toast
    private index = 1;
    private destroyByClick = true;
    private duration = 2000;
    private hasIcon = true;
    private position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
    private preventDuplicates = false;
    private status: NbComponentStatus = 'primary';
    private statusError: NbComponentStatus = 'danger';

    constructor(public toastrService?: NbToastrService, public sweetalertService?: SweetalertService) {
        super();
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

    protected onLoadFailed(type: NbComponentStatus, title: string, body: string): void {
        //console.log("ERROR:::" + error);
        this.showToast(type, title, body);
    }

    protected showToast(type: NbComponentStatus, title: string, body: string) {
        const config = {
            status: type,
            destroyByClick: this.destroyByClick,
            duration: this.duration,
            hasIcon: this.hasIcon,
            position: this.position,
            preventDuplicates: this.preventDuplicates,
        };
        //const titleContent = title ? `. ${title}` : '';
        const titleContent = title ? `${title}` : '';

        this.index += 1;
        this.toastrService.show(
            body,
            //`Toast ${this.index}${titleContent}`,
            `${titleContent}`,
            config);
    }

    protected sweetalertQuestion(type: SweetAlertIcon, title: string, message: string): Promise<SweetAlertResult> {
        let sweetalert = new SweetalertModel();
        sweetalert.title = title;
        sweetalert.text = message;
        sweetalert.icon = type;
        sweetalert.showConfirmButton = true;
        sweetalert.showCancelButton = true;
        return this.sweetalertService.showAlertConfirm(sweetalert);
    }
    protected sweetAlertToast(type: SweetAlertIcon, title: string, message: string) {
        let sweetalert = new SweetalertModel();
        sweetalert.title = title;
        sweetalert.text = message;
        sweetalert.icon = type;
        sweetalert.timer = SweetAlertConstants.SWEET_ALERT_TIMER_1500;
        this.sweetalertService.showAlertBasic(sweetalert);
    }
}