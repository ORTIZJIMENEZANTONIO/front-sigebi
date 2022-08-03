import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelegationDetailComponent } from './delegation-detail.component';

describe('DelegationDetailComponent', () => {
  let component: DelegationDetailComponent;
  let fixture: ComponentFixture<DelegationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelegationDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelegationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
