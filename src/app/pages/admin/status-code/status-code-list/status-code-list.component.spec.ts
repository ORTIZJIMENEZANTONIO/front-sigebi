import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusCodeListComponent } from './status-code-list.component';

describe('StatusCodeListComponent', () => {
  let component: StatusCodeListComponent;
  let fixture: ComponentFixture<StatusCodeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusCodeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusCodeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
