import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveValuesListComponent } from './save-values-list.component';

describe('SaveValuesListComponent', () => {
  let component: SaveValuesListComponent;
  let fixture: ComponentFixture<SaveValuesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveValuesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveValuesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
