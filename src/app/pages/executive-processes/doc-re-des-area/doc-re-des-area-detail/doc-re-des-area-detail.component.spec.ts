import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocReDesAreaDetailComponent } from './doc-re-des-area-detail.component';

describe('DocReDesAreaDetailComponent', () => {
  let component: DocReDesAreaDetailComponent;
  let fixture: ComponentFixture<DocReDesAreaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocReDesAreaDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocReDesAreaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
