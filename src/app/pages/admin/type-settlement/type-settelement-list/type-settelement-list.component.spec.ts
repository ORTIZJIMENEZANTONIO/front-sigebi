import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeSettelementListComponent } from './type-settelement-list.component';

describe('TypeSettelementListComponent', () => {
  let component: TypeSettelementListComponent;
  let fixture: ComponentFixture<TypeSettelementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeSettelementListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeSettelementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
