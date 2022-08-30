import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalDocReceivedDetailComponent } from './total-doc-received-detail.component';

describe('TotalDocReceivedDetailComponent', () => {
  let component: TotalDocReceivedDetailComponent;
  let fixture: ComponentFixture<TotalDocReceivedDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalDocReceivedDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalDocReceivedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
