import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionalDelegationListComponent } from './regional-delegation-list.component';

describe('RegionalDelegationListComponent', () => {
  let component: RegionalDelegationListComponent;
  let fixture: ComponentFixture<RegionalDelegationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionalDelegationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionalDelegationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
