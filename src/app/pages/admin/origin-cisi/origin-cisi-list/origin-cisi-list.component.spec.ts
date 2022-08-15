import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginCisiListComponent } from './origin-cisi-list.component';

describe('OriginCisiListComponent', () => {
  let component: OriginCisiListComponent;
  let fixture: ComponentFixture<OriginCisiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OriginCisiListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginCisiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
