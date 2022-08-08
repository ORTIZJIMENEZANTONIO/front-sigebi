import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeGoodListComponent } from './type-good-list.component';

describe('TypeGoodListComponent', () => {
  let component: TypeGoodListComponent;
  let fixture: ComponentFixture<TypeGoodListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeGoodListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeGoodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
