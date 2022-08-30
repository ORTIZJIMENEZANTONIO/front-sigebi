import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestructionAuthManagementListComponent } from './destruction-auth-management-list.component';

describe('DestructionAuthManagementListComponent', () => {
  let component: DestructionAuthManagementListComponent;
  let fixture: ComponentFixture<DestructionAuthManagementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestructionAuthManagementListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestructionAuthManagementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
