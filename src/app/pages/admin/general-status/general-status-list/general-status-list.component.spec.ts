import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralStatusListComponent } from './general-status-list.component';

describe('GeneralStatusListComponent', () => {
  let component: GeneralStatusListComponent;
  let fixture: ComponentFixture<GeneralStatusListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralStatusListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralStatusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
