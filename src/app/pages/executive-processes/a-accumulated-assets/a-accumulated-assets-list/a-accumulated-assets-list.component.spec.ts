import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AAccumulatedAssetsListComponent } from './a-accumulated-assets-list.component';

describe('AAccumulatedAssetsListComponent', () => {
  let component: AAccumulatedAssetsListComponent;
  let fixture: ComponentFixture<AAccumulatedAssetsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AAccumulatedAssetsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AAccumulatedAssetsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
