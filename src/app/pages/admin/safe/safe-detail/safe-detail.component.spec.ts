import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeDetailComponent } from './safe-detail.component';

describe('SafeDetailComponent', () => {
  let component: SafeDetailComponent;
  let fixture: ComponentFixture<SafeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
