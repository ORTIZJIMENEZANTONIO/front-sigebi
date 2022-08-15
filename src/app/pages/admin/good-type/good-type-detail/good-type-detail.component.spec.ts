import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodTypeDetailComponent } from './good-type-detail.component';

describe('GoodTypeDetailComponent', () => {
  let component: GoodTypeDetailComponent;
  let fixture: ComponentFixture<GoodTypeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodTypeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodTypeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
