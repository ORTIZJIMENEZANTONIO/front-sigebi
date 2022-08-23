import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoccompensationSatDetailComponent } from './doccompensation-sat-detail.component';

describe('DoccompensationSatDetailComponent', () => {
  let component: DoccompensationSatDetailComponent;
  let fixture: ComponentFixture<DoccompensationSatDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoccompensationSatDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoccompensationSatDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
