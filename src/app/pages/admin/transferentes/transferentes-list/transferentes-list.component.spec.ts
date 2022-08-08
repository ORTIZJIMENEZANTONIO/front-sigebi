import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferentesListComponent } from './transferentes-list.component';

describe('TransferentesListComponent', () => {
  let component: TransferentesListComponent;
  let fixture: ComponentFixture<TransferentesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferentesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferentesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
