import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimDocRecepIntDetailComponent } from './sim-doc-recep-int-detail.component';

describe('SimDocRecepIntDetailComponent', () => {
  let component: SimDocRecepIntDetailComponent;
  let fixture: ComponentFixture<SimDocRecepIntDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimDocRecepIntDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimDocRecepIntDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
