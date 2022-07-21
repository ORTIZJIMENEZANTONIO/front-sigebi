import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusProcessDetailComponent } from './status-process-detail.component';

describe('StatusProcessDetailComponent', () => {
  let component: StatusProcessDetailComponent;
  let fixture: ComponentFixture<StatusProcessDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusProcessDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusProcessDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
