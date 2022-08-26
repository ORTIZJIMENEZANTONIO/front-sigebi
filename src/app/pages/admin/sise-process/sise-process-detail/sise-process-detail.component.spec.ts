import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiseProcessDetailComponent } from './sise-process-detail.component';

describe('SiseProcessDetailComponent', () => {
  let component: SiseProcessDetailComponent;
  let fixture: ComponentFixture<SiseProcessDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiseProcessDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiseProcessDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
