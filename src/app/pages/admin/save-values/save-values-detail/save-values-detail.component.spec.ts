import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveValuesDetailComponent } from './save-values-detail.component';

describe('SaveValuesDetailComponent', () => {
  let component: SaveValuesDetailComponent;
  let fixture: ComponentFixture<SaveValuesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveValuesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveValuesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
