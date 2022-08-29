import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocReDesAreaListComponent } from './doc-re-des-area-list.component';

describe('DocReDesAreaListComponent', () => {
  let component: DocReDesAreaListComponent;
  let fixture: ComponentFixture<DocReDesAreaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocReDesAreaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocReDesAreaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
