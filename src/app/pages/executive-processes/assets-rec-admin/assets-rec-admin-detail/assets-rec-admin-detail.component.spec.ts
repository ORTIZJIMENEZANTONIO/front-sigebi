import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsRecAdminDetailComponent } from './assets-rec-admin-detail.component';

describe('AssetsRecAdminDetailComponent', () => {
  let component: AssetsRecAdminDetailComponent;
  let fixture: ComponentFixture<AssetsRecAdminDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetsRecAdminDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsRecAdminDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
