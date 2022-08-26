import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelOkeyDetailComponent } from './label-okey-detail.component';

describe('LabelOkeyDetailComponent', () => {
  let component: LabelOkeyDetailComponent;
  let fixture: ComponentFixture<LabelOkeyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelOkeyDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelOkeyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
