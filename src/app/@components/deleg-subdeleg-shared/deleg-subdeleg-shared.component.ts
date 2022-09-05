import { Component, OnInit, Input, } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { concat, Observable, of, Subject } from "rxjs";
import {
  catchError,
  distinctUntilChanged,
  map,
  switchMap,
  tap,
} from "rxjs/operators";



@Component({
  selector: 'ngx-deleg-subdeleg-shared',
  templateUrl: './deleg-subdeleg-shared.component.html',
  styleUrls: ['./deleg-subdeleg-shared.component.scss']
})
export class DelegSubdelegSharedComponent implements OnInit{

  @Input() form: FormGroup;
  @Input() nomDeleg: string = "nomDeleg";
  @Input() nomSubDel: string = "nomSubDel";
  @Input() showSubdelegation: boolean = true
  delegations$: Observable<any[]>;
  delegationsLoading = false;
  delegationInput$ = new Subject<string>();
  subDelegations$: Observable<any[]>;
  subDelegationsLoading = false;
  subDelegationInput$ = new Subject<string>();


  ngOnInit(): void {
    this.loadDelegations();
    if(this.showSubdelegation) this.loadSubdelegations();
  }

  constructor() {}

  
  get delegation() {
    return this.form.get(this.nomDeleg);
  }

  get subdelegation() {
    return this.form.get(this.nomSubDel);
  }

  delegations(search: string) {
    return of([
      { id: 1, name: "Delegacion 1" },
      { id: 2, name: "Delegación 2" },
    ]).pipe(
      map((e) => e.filter((_e) => _e.name.toLowerCase().includes(search)))
    );
  }

  subdelegations(search: string) {
    return of([
      { id: 1, name: "Subdelegacion 1 ", delId: 1 },
      { id: 2, name: "Subdelegacion 2 ", delId: 1 },
      { id: 3, name: "Subdelegacion 3 ", delId: 2 },
      { id: 4, name: "Subdelegacion 4 ", delId: 2 },
    ]).pipe(
      map((e) =>
        e.filter(
          (_e) =>
            _e.name.toLowerCase().includes(search.toLowerCase()) &&
            _e.delId == this.delegation.value
        )
      )
    );
  }

  private loadDelegations() {
    this.delegations$ = concat(
      of([]),
      this.delegationInput$.pipe(
        distinctUntilChanged(),
        tap(() => (this.delegationsLoading = true)),
        switchMap((term) =>
          this.delegations(term).pipe(
            catchError(() => of([])),
            tap(() => (this.delegationsLoading = false))
          )
        )
      )
    );
  }

  loadSubdelegations() {
    this.subDelegations$ = concat(
      of([]),
      this.subDelegationInput$.pipe(
        distinctUntilChanged(),
        tap(() => (this.subDelegationsLoading = true)),
        switchMap((term) =>
          this.subdelegations(term).pipe(
            catchError(() => of([])),
            tap(() => (this.subDelegationsLoading = false))
          )
        )
      )
    );
  }

  onDelegationChange() {
    if(this.showSubdelegation) this.subdelegation.setValue(null);
  }
}


