import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeSettelementDetailComponent } from './type-settelement-detail.component';

describe('TypeSettelementDetailComponent', () => {
  let component: TypeSettelementDetailComponent;
  let fixture: ComponentFixture<TypeSettelementDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeSettelementDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeSettelementDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
