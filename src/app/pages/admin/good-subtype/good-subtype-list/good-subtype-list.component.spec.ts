import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodSubtypeListComponent } from './good-subtype-list.component';

describe('GoodSubtypeListComponent', () => {
  let component: GoodSubtypeListComponent;
  let fixture: ComponentFixture<GoodSubtypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodSubtypeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodSubtypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
