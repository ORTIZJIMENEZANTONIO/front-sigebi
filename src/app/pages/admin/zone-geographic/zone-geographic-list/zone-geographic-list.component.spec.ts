import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneGeographicListComponent } from './zone-geographic-list.component';

describe('ZoneGeographicListComponent', () => {
  let component: ZoneGeographicListComponent;
  let fixture: ComponentFixture<ZoneGeographicListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoneGeographicListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneGeographicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
