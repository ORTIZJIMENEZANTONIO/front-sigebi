import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnRequestComponent } from './turn-request.component';

describe('TurnRequestComponent', () => {
  let component: TurnRequestComponent;
  let fixture: ComponentFixture<TurnRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
