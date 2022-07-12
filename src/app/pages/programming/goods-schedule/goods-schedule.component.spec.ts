import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsScheduleComponent } from './goods-schedule.component';

describe('GoodsScheduleComponent', () => {
  let component: GoodsScheduleComponent;
  let fixture: ComponentFixture<GoodsScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodsScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
