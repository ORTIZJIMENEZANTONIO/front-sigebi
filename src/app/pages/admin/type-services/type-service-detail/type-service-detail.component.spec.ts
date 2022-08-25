import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeServiceDetailComponent } from './type-service-detail.component';

describe('TypeServiceDetailComponent', () => {
  let component: TypeServiceDetailComponent;
  let fixture: ComponentFixture<TypeServiceDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeServiceDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeServiceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
