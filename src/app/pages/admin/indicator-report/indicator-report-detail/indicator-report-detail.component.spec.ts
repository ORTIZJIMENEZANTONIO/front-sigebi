import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorReportDetailComponent } from './indicator-report-detail.component';

describe('IndicatorReportDetailComponent', () => {
  let component: IndicatorReportDetailComponent;
  let fixture: ComponentFixture<IndicatorReportDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicatorReportDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorReportDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
