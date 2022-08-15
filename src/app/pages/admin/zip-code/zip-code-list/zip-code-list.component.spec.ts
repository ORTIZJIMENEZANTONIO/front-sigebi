import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipCodeListComponent } from './zip-code-list.component';

describe('ZipCodeListComponent', () => {
  let component: ZipCodeListComponent;
  let fixture: ComponentFixture<ZipCodeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZipCodeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipCodeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
