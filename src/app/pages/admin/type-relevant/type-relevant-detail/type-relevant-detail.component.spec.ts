import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeRelevantDetailComponent } from './type-relevant-detail.component';

describe('TypeRelevantDetailComponent', () => {
  let component: TypeRelevantDetailComponent;
  let fixture: ComponentFixture<TypeRelevantDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeRelevantDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeRelevantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
