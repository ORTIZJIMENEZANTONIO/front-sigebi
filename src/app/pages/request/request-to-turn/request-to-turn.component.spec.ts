import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestToTurnComponent } from './request-to-turn.component';

describe('RequestToTurnComponent', () => {
  let component: RequestToTurnComponent;
  let fixture: ComponentFixture<RequestToTurnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestToTurnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestToTurnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
