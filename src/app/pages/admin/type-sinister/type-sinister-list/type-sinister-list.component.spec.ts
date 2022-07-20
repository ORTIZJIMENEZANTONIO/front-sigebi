import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeSinisterListComponent } from './type-sinister-list.component';

describe('TypeSinisterListComponent', () => {
  let component: TypeSinisterListComponent;
  let fixture: ComponentFixture<TypeSinisterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeSinisterListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeSinisterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
