import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusCodeDetailComponent } from './status-code-detail.component';

describe('StatusCodeDetailComponent', () => {
  let component: StatusCodeDetailComponent;
  let fixture: ComponentFixture<StatusCodeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusCodeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusCodeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
