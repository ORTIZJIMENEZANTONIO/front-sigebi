import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeGoodDetailComponent } from './type-good-detail.component';

describe('TypeGoodDetailComponent', () => {
  let component: TypeGoodDetailComponent;
  let fixture: ComponentFixture<TypeGoodDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeGoodDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeGoodDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
