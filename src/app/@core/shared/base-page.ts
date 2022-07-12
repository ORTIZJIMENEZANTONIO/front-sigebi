import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from 'rxjs/Subscription';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrService } from '@nebular/theme';
import { BaseApp } from "./base-app";

@Component({
    template: ''
})
export abstract class BasePage extends BaseApp implements OnInit, OnDestroy {

    //message toast
    index = 1;
    destroyByClick = true;
    duration = 2000;
    hasIcon = true;
    position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
    preventDuplicates = false;
    status: NbComponentStatus = 'primary';
    statusError: NbComponentStatus = 'danger';

    constructor(public toastrService?: NbToastrService) {
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
        this.showToast(type, title,body);
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
}