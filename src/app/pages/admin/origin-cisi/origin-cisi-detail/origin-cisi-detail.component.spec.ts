import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginCisiDetailComponent } from './origin-cisi-detail.component';

describe('OriginCisiDetailComponent', () => {
  let component: OriginCisiDetailComponent;
  let fixture: ComponentFixture<OriginCisiDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OriginCisiDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginCisiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
