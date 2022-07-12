import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeductiveDetailComponent } from './deductive-detail.component';

describe('DeductiveDetailComponent', () => {
  let component: DeductiveDetailComponent;
  let fixture: ComponentFixture<DeductiveDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeductiveDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeductiveDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
