import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffairSeraListComponent } from './affair-sera-list.component';

describe('AffairSeraListComponent', () => {
  let component: AffairSeraListComponent;
  let fixture: ComponentFixture<AffairSeraListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffairSeraListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffairSeraListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
