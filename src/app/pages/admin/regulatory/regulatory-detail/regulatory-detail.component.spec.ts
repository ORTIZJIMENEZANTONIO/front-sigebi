import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulatoryDetailComponent } from './regulatory-detail.component';

describe('RegulatoryDetailComponent', () => {
  let component: RegulatoryDetailComponent;
  let fixture: ComponentFixture<RegulatoryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegulatoryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegulatoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
