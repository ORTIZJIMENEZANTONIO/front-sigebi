import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyRecFilesDetailComponent } from './daily-rec-files-detail.component';

describe('DailyRecFilesDetailComponent', () => {
  let component: DailyRecFilesDetailComponent;
  let fixture: ComponentFixture<DailyRecFilesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyRecFilesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyRecFilesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
