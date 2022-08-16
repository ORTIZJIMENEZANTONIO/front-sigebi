import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiciadosDetailComponent } from './indiciados-detail.component';

describe('IndiciadosDetailComponent', () => {
  let component: IndiciadosDetailComponent;
  let fixture: ComponentFixture<IndiciadosDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndiciadosDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiciadosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
