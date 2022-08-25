import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfAInsuredSeizuresAbandDetailComponent } from './inf-a-insured-seizures-aband-detail.component';

describe('InfAInsuredSeizuresAbandDetailComponent', () => {
  let component: InfAInsuredSeizuresAbandDetailComponent;
  let fixture: ComponentFixture<InfAInsuredSeizuresAbandDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfAInsuredSeizuresAbandDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfAInsuredSeizuresAbandDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
