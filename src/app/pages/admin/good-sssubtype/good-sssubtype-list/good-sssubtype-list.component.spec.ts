import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodSssubtypeListComponent } from './good-sssubtype-list.component';

describe('GoodSssubtypeListComponent', () => {
  let component: GoodSssubtypeListComponent;
  let fixture: ComponentFixture<GoodSssubtypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodSssubtypeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodSssubtypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
