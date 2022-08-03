import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficesDeailComponent } from './offices-deail.component';

describe('OfficesDeailComponent', () => {
  let component: OfficesDeailComponent;
  let fixture: ComponentFixture<OfficesDeailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficesDeailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficesDeailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
