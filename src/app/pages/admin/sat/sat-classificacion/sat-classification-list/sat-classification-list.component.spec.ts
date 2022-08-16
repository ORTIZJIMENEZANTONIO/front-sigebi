import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatClassificationListComponent } from './sat-classification-list.component';

describe('SatClassificationListComponent', () => {
  let component: SatClassificationListComponent;
  let fixture: ComponentFixture<SatClassificationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SatClassificationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SatClassificationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
