import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerDetailComponent } from './drawer-detail.component';

describe('DrawerDetailComponent', () => {
  let component: DrawerDetailComponent;
  let fixture: ComponentFixture<DrawerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawerDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
