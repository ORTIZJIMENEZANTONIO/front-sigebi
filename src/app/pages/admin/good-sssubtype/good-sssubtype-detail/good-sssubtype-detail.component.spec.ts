import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodSssubtypeDetailComponent } from './good-sssubtype-detail.component';

describe('GoodSssubtypeDetailComponent', () => {
  let component: GoodSssubtypeDetailComponent;
  let fixture: ComponentFixture<GoodSssubtypeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodSssubtypeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodSssubtypeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
