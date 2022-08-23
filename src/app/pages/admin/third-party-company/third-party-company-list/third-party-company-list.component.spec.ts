import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPartyCompanyListComponent } from './third-party-company-list.component';

describe('ThirdPartyCompanyListComponent', () => {
  let component: ThirdPartyCompanyListComponent;
  let fixture: ComponentFixture<ThirdPartyCompanyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdPartyCompanyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdPartyCompanyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
