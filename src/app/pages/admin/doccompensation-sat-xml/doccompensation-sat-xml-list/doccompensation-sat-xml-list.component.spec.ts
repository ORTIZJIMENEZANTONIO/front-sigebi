import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoccompensationSatXmlListComponent } from './doccompensation-sat-xml-list.component';

describe('DoccompensationSatXmlListComponent', () => {
  let component: DoccompensationSatXmlListComponent;
  let fixture: ComponentFixture<DoccompensationSatXmlListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoccompensationSatXmlListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoccompensationSatXmlListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
