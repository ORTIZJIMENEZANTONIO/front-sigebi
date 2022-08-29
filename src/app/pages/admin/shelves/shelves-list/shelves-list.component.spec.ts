import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelvesListComponent } from './shelves-list.component';

describe('ShelvesListComponent', () => {
  let component: ShelvesListComponent;
  let fixture: ComponentFixture<ShelvesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShelvesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelvesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
