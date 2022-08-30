import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassAppValUpdListComponent } from './mass-app-val-upd-list.component';

describe('MassAppValUpdListComponent', () => {
  let component: MassAppValUpdListComponent;
  let fixture: ComponentFixture<MassAppValUpdListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MassAppValUpdListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MassAppValUpdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
