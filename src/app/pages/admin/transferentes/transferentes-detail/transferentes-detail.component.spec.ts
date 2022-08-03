import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferentesDetailComponent } from './transferentes-detail.component';

describe('TransferentesDetailComponent', () => {
  let component: TransferentesDetailComponent;
  let fixture: ComponentFixture<TransferentesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferentesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferentesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
