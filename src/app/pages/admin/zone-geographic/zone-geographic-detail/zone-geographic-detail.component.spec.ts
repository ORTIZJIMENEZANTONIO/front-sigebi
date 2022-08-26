import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneGeographicDetailComponent } from './zone-geographic-detail.component';

describe('ZoneGeographicDetailComponent', () => {
  let component: ZoneGeographicDetailComponent;
  let fixture: ComponentFixture<ZoneGeographicDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoneGeographicDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneGeographicDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
