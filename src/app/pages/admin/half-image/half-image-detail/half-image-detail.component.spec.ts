import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfImageDetailComponent } from './half-image-detail.component';

describe('HalfImageDetailComponent', () => {
  let component: HalfImageDetailComponent;
  let fixture: ComponentFixture<HalfImageDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HalfImageDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HalfImageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
