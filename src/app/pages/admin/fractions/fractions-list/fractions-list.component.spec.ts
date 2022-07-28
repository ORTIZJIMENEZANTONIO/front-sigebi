import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FractionsListComponent } from './fractions-list.component';

describe('FractionsListComponent', () => {
  let component: FractionsListComponent;
  let fixture: ComponentFixture<FractionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FractionsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FractionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
