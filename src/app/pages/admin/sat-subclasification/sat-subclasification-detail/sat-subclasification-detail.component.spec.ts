import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatSubclasificationDetailComponent } from './sat-subclasification-detail.component';

describe('SatSubclasificationDetailComponent', () => {
  let component: SatSubclasificationDetailComponent;
  let fixture: ComponentFixture<SatSubclasificationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SatSubclasificationDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SatSubclasificationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
