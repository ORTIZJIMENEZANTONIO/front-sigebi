import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoccompensationDetailComponent } from './doccompensation-detail.component';

describe('DoccompensationDetailComponent', () => {
  let component: DoccompensationDetailComponent;
  let fixture: ComponentFixture<DoccompensationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoccompensationDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoccompensationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
