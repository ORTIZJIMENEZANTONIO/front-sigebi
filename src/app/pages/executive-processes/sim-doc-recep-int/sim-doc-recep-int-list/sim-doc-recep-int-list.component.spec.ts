import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimDocRecepIntListComponent } from './sim-doc-recep-int-list.component';

describe('SimDocRecepIntListComponent', () => {
  let component: SimDocRecepIntListComponent;
  let fixture: ComponentFixture<SimDocRecepIntListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimDocRecepIntListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimDocRecepIntListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
