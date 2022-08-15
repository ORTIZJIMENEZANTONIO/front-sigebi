import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClarificationDetailComponent } from './clarification-detail.component';

describe('ClarificationDetailComponent', () => {
  let component: ClarificationDetailComponent;
  let fixture: ComponentFixture<ClarificationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClarificationDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClarificationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
