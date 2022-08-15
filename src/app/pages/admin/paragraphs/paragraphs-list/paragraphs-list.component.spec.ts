import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphsListComponent } from './paragraphs-list.component';

describe('ParagraphsListComponent', () => {
  let component: ParagraphsListComponent;
  let fixture: ComponentFixture<ParagraphsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParagraphsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParagraphsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
