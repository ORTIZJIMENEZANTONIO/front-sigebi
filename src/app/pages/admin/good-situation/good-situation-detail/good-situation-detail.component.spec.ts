import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodSituationDetailComponent } from './good-situation-detail.component';

describe('GoodSituationDetailComponent', () => {
  let component: GoodSituationDetailComponent;
  let fixture: ComponentFixture<GoodSituationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodSituationDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodSituationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
