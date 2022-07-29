import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionalDelegationDetailComponent } from './regional-delegation-detail.component';

describe('RegionalDelegationDetailComponent', () => {
  let component: RegionalDelegationDetailComponent;
  let fixture: ComponentFixture<RegionalDelegationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionalDelegationDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionalDelegationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
