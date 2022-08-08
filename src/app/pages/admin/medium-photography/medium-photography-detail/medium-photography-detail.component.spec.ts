import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumPhotographyDetailComponent } from './medium-photography-detail.component';

describe('MediumPhotographyDetailComponent', () => {
  let component: MediumPhotographyDetailComponent;
  let fixture: ComponentFixture<MediumPhotographyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediumPhotographyDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumPhotographyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
