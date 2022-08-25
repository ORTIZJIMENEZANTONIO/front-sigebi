import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsRecAdminListComponent } from './assets-rec-admin-list.component';

describe('AssetsRecAdminListComponent', () => {
  let component: AssetsRecAdminListComponent;
  let fixture: ComponentFixture<AssetsRecAdminListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetsRecAdminListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsRecAdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
