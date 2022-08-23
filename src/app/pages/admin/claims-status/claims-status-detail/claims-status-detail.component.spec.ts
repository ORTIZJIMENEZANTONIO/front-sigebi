import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsStatusDetailComponent } from './claims-status-detail.component';

describe('ClaimsStatusDetailComponent', () => {
  let component: ClaimsStatusDetailComponent;
  let fixture: ComponentFixture<ClaimsStatusDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimsStatusDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimsStatusDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
