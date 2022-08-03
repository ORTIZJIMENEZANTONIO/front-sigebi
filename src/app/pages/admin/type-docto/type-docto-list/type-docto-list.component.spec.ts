import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeDoctoListComponent } from './type-docto-list.component';

describe('TypeDoctoListComponent', () => {
  let component: TypeDoctoListComponent;
  let fixture: ComponentFixture<TypeDoctoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeDoctoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeDoctoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
