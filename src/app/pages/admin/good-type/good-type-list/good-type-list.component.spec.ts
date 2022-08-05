import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodTypeListComponent } from './good-type-list.component';

describe('GoodTypeListComponent', () => {
  let component: GoodTypeListComponent;
  let fixture: ComponentFixture<GoodTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodTypeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
