import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffairSeraDetailComponent } from './affair-sera-detail.component';

describe('AffairSeraDetailComponent', () => {
  let component: AffairSeraDetailComponent;
  let fixture: ComponentFixture<AffairSeraDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffairSeraDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffairSeraDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
