import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatClassificationDetailComponent } from './sat-classification-detail.component';

describe('SatClassificationDetailComponent', () => {
  let component: SatClassificationDetailComponent;
  let fixture: ComponentFixture<SatClassificationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SatClassificationDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SatClassificationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
