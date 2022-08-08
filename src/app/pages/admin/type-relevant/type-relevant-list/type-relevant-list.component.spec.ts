import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeRelevantListComponent } from './type-relevant-list.component';

describe('TypeRelevantListComponent', () => {
  let component: TypeRelevantListComponent;
  let fixture: ComponentFixture<TypeRelevantListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeRelevantListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeRelevantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
