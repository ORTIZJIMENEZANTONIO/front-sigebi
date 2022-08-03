import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumPhotographyListComponent } from './medium-photography-list.component';

describe('MediumPhotographyListComponent', () => {
  let component: MediumPhotographyListComponent;
  let fixture: ComponentFixture<MediumPhotographyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediumPhotographyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumPhotographyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
