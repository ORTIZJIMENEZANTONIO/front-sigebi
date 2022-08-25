import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReDocsXSeraListComponent } from './re-docs-x-sera-list.component';

describe('ReDocsXSeraListComponent', () => {
  let component: ReDocsXSeraListComponent;
  let fixture: ComponentFixture<ReDocsXSeraListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReDocsXSeraListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReDocsXSeraListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
