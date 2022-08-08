import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SateDetailComponent } from './sate-detail.component';

describe('SateDetailComponent', () => {
  let component: SateDetailComponent;
  let fixture: ComponentFixture<SateDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SateDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SateDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
