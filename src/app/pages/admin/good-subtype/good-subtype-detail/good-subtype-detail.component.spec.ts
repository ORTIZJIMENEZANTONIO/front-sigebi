import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodSubtypeDetailComponent } from './good-subtype-detail.component';

describe('GoodSubtypeDetailComponent', () => {
  let component: GoodSubtypeDetailComponent;
  let fixture: ComponentFixture<GoodSubtypeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodSubtypeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodSubtypeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
