import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelegationStateDetailComponent } from './delegation-state-detail.component';

describe('DelegationStateDetailComponent', () => {
  let component: DelegationStateDetailComponent;
  let fixture: ComponentFixture<DelegationStateDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelegationStateDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelegationStateDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
