import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfaiSerieDetailComponent } from './ifai-serie-detail.component';

describe('IfaiSerieDetailComponent', () => {
  let component: IfaiSerieDetailComponent;
  let fixture: ComponentFixture<IfaiSerieDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfaiSerieDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IfaiSerieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
