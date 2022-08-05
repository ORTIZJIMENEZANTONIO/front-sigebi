import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodSsubtypeDetailComponent } from './good-ssubtype-detail.component';

describe('GoodSsubtypeDetailComponent', () => {
  let component: GoodSsubtypeDetailComponent;
  let fixture: ComponentFixture<GoodSsubtypeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodSsubtypeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodSsubtypeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
