import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaryDetailComponent } from './notary-detail.component';

describe('NotaryDetailComponent', () => {
  let component: NotaryDetailComponent;
  let fixture: ComponentFixture<NotaryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotaryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotaryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
