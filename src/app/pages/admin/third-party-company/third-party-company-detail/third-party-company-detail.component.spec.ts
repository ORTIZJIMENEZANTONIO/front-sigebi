import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPartyCompanyDetailComponent } from './third-party-company-detail.component';

describe('ThirdPartyCompanyDetailComponent', () => {
  let component: ThirdPartyCompanyDetailComponent;
  let fixture: ComponentFixture<ThirdPartyCompanyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdPartyCompanyDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdPartyCompanyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
