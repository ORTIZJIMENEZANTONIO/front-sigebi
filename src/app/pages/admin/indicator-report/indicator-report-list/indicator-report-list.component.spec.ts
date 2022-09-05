import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorReportListComponent } from './indicator-report-list.component';

describe('IndicatorReportListComponent', () => {
  let component: IndicatorReportListComponent;
  let fixture: ComponentFixture<IndicatorReportListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicatorReportListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
