import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassAppValUpdDetailComponent } from './mass-app-val-upd-detail.component';

describe('MassAppValUpdDetailComponent', () => {
  let component: MassAppValUpdDetailComponent;
  let fixture: ComponentFixture<MassAppValUpdDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MassAppValUpdDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MassAppValUpdDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
