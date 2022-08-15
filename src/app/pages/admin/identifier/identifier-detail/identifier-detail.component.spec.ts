import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifierDetailComponent } from './identifier-detail.component';

describe('IdentifierDetailComponent', () => {
  let component: IdentifierDetailComponent;
  let fixture: ComponentFixture<IdentifierDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentifierDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifierDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
