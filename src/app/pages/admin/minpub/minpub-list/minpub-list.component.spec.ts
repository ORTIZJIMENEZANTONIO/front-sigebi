import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinpubListComponent } from './minpub-list.component';

describe('MinpubListComponent', () => {
  let component: MinpubListComponent;
  let fixture: ComponentFixture<MinpubListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinpubListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinpubListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
