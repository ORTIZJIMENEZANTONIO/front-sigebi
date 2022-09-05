import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestructionAuthManagementDetailComponent } from './destruction-auth-management-detail.component';

describe('DestructionAuthManagementDetailComponent', () => {
  let component: DestructionAuthManagementDetailComponent;
  let fixture: ComponentFixture<DestructionAuthManagementDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestructionAuthManagementDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestructionAuthManagementDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
