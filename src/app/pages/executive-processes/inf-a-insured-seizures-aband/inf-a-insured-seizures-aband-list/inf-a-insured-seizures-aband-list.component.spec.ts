import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfAInsuredSeizuresAbandListComponent } from './inf-a-insured-seizures-aband-list.component';

describe('InfAInsuredSeizuresAbandListComponent', () => {
  let component: InfAInsuredSeizuresAbandListComponent;
  let fixture: ComponentFixture<InfAInsuredSeizuresAbandListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfAInsuredSeizuresAbandListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfAInsuredSeizuresAbandListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
