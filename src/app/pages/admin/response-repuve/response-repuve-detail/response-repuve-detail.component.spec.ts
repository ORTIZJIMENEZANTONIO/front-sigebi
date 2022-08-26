import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseRepuveDetailComponent } from './response-repuve-detail.component';

describe('ResponseRepuveDetailComponent', () => {
  let component: ResponseRepuveDetailComponent;
  let fixture: ComponentFixture<ResponseRepuveDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponseRepuveDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseRepuveDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
