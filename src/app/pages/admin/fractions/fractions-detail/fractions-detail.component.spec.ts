import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FractionsDetailComponent } from './fractions-detail.component';

describe('FractionsDetailComponent', () => {
  let component: FractionsDetailComponent;
  let fixture: ComponentFixture<FractionsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FractionsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FractionsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
