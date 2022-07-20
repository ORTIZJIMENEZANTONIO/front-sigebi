import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictamentListComponent } from './dictament-list.component';

describe('DictamentListComponent', () => {
  let component: DictamentListComponent;
  let fixture: ComponentFixture<DictamentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictamentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictamentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
