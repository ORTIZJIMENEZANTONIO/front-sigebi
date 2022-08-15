import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiciadosListComponent } from './indiciados-list.component';

describe('IndiciadosListComponent', () => {
  let component: IndiciadosListComponent;
  let fixture: ComponentFixture<IndiciadosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndiciadosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiciadosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
