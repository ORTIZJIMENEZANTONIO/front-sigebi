import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GranteesListComponent } from './grantees-list.component';

describe('GranteesListComponent', () => {
  let component: GranteesListComponent;
  let fixture: ComponentFixture<GranteesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GranteesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GranteesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
