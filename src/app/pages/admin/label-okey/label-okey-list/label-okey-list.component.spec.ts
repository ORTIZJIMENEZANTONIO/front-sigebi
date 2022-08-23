import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelOkeyListComponent } from './label-okey-list.component';

describe('LabelOkeyListComponent', () => {
  let component: LabelOkeyListComponent;
  let fixture: ComponentFixture<LabelOkeyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelOkeyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelOkeyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
