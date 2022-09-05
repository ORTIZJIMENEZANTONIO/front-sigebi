import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoccompensationSatXmlDetailComponent } from './doccompensation-sat-xml-detail.component';

describe('DoccompensationSatXmlDetailComponent', () => {
  let component: DoccompensationSatXmlDetailComponent;
  let fixture: ComponentFixture<DoccompensationSatXmlDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoccompensationSatXmlDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoccompensationSatXmlDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
