import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinpubDetailComponent } from './minpub-detail.component';

describe('MinpubDetailComponent', () => {
  let component: MinpubDetailComponent;
  let fixture: ComponentFixture<MinpubDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinpubDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinpubDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
