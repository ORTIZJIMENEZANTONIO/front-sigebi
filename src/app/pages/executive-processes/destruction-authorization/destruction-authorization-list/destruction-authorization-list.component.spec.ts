import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestructionAuthorizationListComponent } from './destruction-authorization-list.component';

describe('DestructionAuthorizationListComponent', () => {
  let component: DestructionAuthorizationListComponent;
  let fixture: ComponentFixture<DestructionAuthorizationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestructionAuthorizationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestructionAuthorizationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
