import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodSituacionDetailComponent } from './good-situacion-detail.component';

describe('GoodSituacionDetailComponent', () => {
  let component: GoodSituacionDetailComponent;
  let fixture: ComponentFixture<GoodSituacionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodSituacionDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodSituacionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
