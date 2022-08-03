import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDelegationListComponent } from './detail-delegation-list.component';

describe('DetailDelegationListComponent', () => {
  let component: DetailDelegationListComponent;
  let fixture: ComponentFixture<DetailDelegationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailDelegationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDelegationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
