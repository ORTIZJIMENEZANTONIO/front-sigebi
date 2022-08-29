import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReDocsXSeraDetailComponent } from './re-docs-x-sera-detail.component';

describe('ReDocsXSeraDetailComponent', () => {
  let component: ReDocsXSeraDetailComponent;
  let fixture: ComponentFixture<ReDocsXSeraDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReDocsXSeraDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReDocsXSeraDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
