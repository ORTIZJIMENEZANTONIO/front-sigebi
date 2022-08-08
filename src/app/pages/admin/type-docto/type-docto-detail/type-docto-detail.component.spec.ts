import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeDoctoDetailComponent } from './type-docto-detail.component';

describe('TypeDoctoDetailComponent', () => {
  let component: TypeDoctoDetailComponent;
  let fixture: ComponentFixture<TypeDoctoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeDoctoDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeDoctoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
