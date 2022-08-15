import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiabClasificationDetailComponent } from './siab-clasification-detail.component';

describe('SiabClasificationDetailComponent', () => {
  let component: SiabClasificationDetailComponent;
  let fixture: ComponentFixture<SiabClasificationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiabClasificationDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiabClasificationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
