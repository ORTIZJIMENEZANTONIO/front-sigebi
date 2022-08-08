import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphsDetailComponent } from './paragraphs-detail.component';

describe('ParagraphsDetailComponent', () => {
  let component: ParagraphsDetailComponent;
  let fixture: ComponentFixture<ParagraphsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParagraphsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParagraphsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
