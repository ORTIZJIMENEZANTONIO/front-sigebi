import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsStatusListComponent } from './claims-status-list.component';

describe('ClaimsStatusListComponent', () => {
  let component: ClaimsStatusListComponent;
  let fixture: ComponentFixture<ClaimsStatusListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimsStatusListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimsStatusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
