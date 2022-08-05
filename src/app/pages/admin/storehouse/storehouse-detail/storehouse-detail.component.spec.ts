import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorehouseDetailComponent } from './storehouse-detail.component';

describe('StorehouseDetailComponent', () => {
  let component: StorehouseDetailComponent;
  let fixture: ComponentFixture<StorehouseDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorehouseDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorehouseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
