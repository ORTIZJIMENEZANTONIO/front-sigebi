import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestructionAuthorizationDetailComponent } from './destruction-authorization-detail.component';

describe('DestructionAuthorizationDetailComponent', () => {
  let component: DestructionAuthorizationDetailComponent;
  let fixture: ComponentFixture<DestructionAuthorizationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestructionAuthorizationDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestructionAuthorizationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
