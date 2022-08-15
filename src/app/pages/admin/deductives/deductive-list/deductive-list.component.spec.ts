import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeductiveListComponent } from './deductive-list.component';

describe('DeductiveListComponent', () => {
  let component: DeductiveListComponent;
  let fixture: ComponentFixture<DeductiveListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeductiveListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeductiveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
