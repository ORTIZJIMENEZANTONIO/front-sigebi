import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormListComponent } from './norm-list.component';

describe('NormListComponent', () => {
  let component: NormListComponent;
  let fixture: ComponentFixture<NormListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
