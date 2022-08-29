import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseRepuveListComponent } from './response-repuve-list.component';

describe('ResponseRepuveListComponent', () => {
  let component: ResponseRepuveListComponent;
  let fixture: ComponentFixture<ResponseRepuveListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponseRepuveListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseRepuveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
