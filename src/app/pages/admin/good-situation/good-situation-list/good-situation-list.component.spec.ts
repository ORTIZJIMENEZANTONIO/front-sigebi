import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodSituationListComponent } from './good-situation-list.component';

describe('GoodSituationListComponent', () => {
  let component: GoodSituationListComponent;
  let fixture: ComponentFixture<GoodSituationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodSituationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodSituationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
