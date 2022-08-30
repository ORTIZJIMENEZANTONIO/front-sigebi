import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealStateOfTheTransferorComponent } from './real-state-of-the-transferor.component';

describe('RealStateOfTheTransferorComponent', () => {
  let component: RealStateOfTheTransferorComponent;
  let fixture: ComponentFixture<RealStateOfTheTransferorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealStateOfTheTransferorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealStateOfTheTransferorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
