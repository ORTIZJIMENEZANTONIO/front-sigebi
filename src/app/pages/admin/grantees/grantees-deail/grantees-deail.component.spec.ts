import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GranteesDeailComponent } from './grantees-deail.component';

describe('GranteesDeailComponent', () => {
  let component: GranteesDeailComponent;
  let fixture: ComponentFixture<GranteesDeailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GranteesDeailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GranteesDeailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
