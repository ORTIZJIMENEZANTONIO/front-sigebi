import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyRecFilesListComponent } from './daily-rec-files-list.component';

describe('DailyRecFilesListComponent', () => {
  let component: DailyRecFilesListComponent;
  let fixture: ComponentFixture<DailyRecFilesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyRecFilesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyRecFilesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
