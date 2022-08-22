import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagesDetailComponent } from './stages-detail.component';

describe('StagesDetailComponent', () => {
  let component: StagesDetailComponent;
  let fixture: ComponentFixture<StagesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StagesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StagesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
