import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictamentDetailComponent } from './dictament-detail.component';

describe('DictamentDetailComponent', () => {
  let component: DictamentDetailComponent;
  let fixture: ComponentFixture<DictamentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictamentDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictamentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
