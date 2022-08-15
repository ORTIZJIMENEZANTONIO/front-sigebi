import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfImageListComponent } from './half-image-list.component';

describe('HalfImageListComponent', () => {
  let component: HalfImageListComponent;
  let fixture: ComponentFixture<HalfImageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HalfImageListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HalfImageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
