import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AAccumulatedAssetsDetailComponent } from './a-accumulated-assets-detail.component';

describe('AAccumulatedAssetsDetailComponent', () => {
  let component: AAccumulatedAssetsDetailComponent;
  let fixture: ComponentFixture<AAccumulatedAssetsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AAccumulatedAssetsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AAccumulatedAssetsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
