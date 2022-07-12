import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

@Component({
    template: ''
})
export abstract class BaseApp implements OnInit, OnDestroy {
    protected subscription: Subscription;
    
    constructor() {}

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
}