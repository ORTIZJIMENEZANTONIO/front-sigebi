import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatSubclasificationListComponent } from './sat-subclasification-list.component';

describe('SatSubclasificationListComponent', () => {
  let component: SatSubclasificationListComponent;
  let fixture: ComponentFixture<SatSubclasificationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SatSubclasificationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SatSubclasificationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
