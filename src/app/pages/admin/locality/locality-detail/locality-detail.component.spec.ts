import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalityDetailComponent } from './locality-detail.component';

describe('LocalityDetailComponent', () => {
  let component: LocalityDetailComponent;
  let fixture: ComponentFixture<LocalityDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalityDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalityDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
