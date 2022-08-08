import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodSituacionListComponent } from './good-situacion-list.component';

describe('GoodSituacionListComponent', () => {
  let component: GoodSituacionListComponent;
  let fixture: ComponentFixture<GoodSituacionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodSituacionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodSituacionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
