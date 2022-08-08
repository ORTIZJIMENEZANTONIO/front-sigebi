import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusProcessListComponent } from './status-process-list.component';

describe('StatusProcessListComponent', () => {
  let component: StatusProcessListComponent;
  let fixture: ComponentFixture<StatusProcessListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusProcessListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusProcessListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
