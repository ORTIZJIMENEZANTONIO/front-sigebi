import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsSubtypeListComponent } from './goods-subtype-list.component';

describe('GoodsSubtypeListComponent', () => {
  let component: GoodsSubtypeListComponent;
  let fixture: ComponentFixture<GoodsSubtypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodsSubtypeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsSubtypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
