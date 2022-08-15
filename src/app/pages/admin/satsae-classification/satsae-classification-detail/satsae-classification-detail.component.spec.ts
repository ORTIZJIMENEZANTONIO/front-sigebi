import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatsaeClassificationDetailComponent } from './satsae-classification-detail.component';

describe('SatsaeClassificationDetailComponent', () => {
  let component: SatsaeClassificationDetailComponent;
  let fixture: ComponentFixture<SatsaeClassificationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SatsaeClassificationDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SatsaeClassificationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
