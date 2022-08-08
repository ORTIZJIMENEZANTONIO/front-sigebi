import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodSsubtypeListComponent } from './good-ssubtype-list.component';

describe('GoodSsubtypeListComponent', () => {
  let component: GoodSsubtypeListComponent;
  let fixture: ComponentFixture<GoodSsubtypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodSsubtypeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodSsubtypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
