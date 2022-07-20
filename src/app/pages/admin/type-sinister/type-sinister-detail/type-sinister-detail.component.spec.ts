import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeSinisterDetailComponent } from './type-sinister-detail.component';

describe('TypeSinisterDetailComponent', () => {
  let component: TypeSinisterDetailComponent;
  let fixture: ComponentFixture<TypeSinisterDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeSinisterDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeSinisterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
