import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProficientListComponent } from './proficient-list.component';

describe('ProficientListComponent', () => {
  let component: ProficientListComponent;
  let fixture: ComponentFixture<ProficientListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProficientListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProficientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
