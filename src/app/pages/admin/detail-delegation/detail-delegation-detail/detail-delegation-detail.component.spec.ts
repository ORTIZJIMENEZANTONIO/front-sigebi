import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDelegationDetailComponent } from './detail-delegation-detail.component';

describe('DetailDelegationDetailComponent', () => {
  let component: DetailDelegationDetailComponent;
  let fixture: ComponentFixture<DetailDelegationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailDelegationDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDelegationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
