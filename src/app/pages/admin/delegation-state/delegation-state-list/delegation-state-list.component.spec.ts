import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelegationStateListComponent } from './delegation-state-list.component';

describe('DelegationStateListComponent', () => {
  let component: DelegationStateListComponent;
  let fixture: ComponentFixture<DelegationStateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelegationStateListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelegationStateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
