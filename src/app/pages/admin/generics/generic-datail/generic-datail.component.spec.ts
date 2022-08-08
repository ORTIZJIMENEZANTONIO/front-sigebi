import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericDatailComponent } from './generic-datail.component';

describe('GenericDatailComponent', () => {
  let component: GenericDatailComponent;
  let fixture: ComponentFixture<GenericDatailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericDatailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericDatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
