import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassiveClassificationComponent } from './massive-classification.component';

describe('MassiveClassificationComponent', () => {
  let component: MassiveClassificationComponent;
  let fixture: ComponentFixture<MassiveClassificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MassiveClassificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MassiveClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
