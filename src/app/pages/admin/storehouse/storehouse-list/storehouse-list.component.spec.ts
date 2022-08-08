import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorehouseListComponent } from './storehouse-list.component';

describe('StorehouseListComponent', () => {
  let component: StorehouseListComponent;
  let fixture: ComponentFixture<StorehouseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorehouseListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorehouseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
