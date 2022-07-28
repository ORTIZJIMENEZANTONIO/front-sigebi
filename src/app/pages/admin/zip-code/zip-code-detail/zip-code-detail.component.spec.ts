import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipCodeDetailComponent } from './zip-code-detail.component';

describe('ZipCodeDetailComponent', () => {
  let component: ZipCodeDetailComponent;
  let fixture: ComponentFixture<ZipCodeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZipCodeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipCodeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
