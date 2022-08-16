import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalSupportListComponent } from './legal-support-list.component';

describe('LegalSupportListComponent', () => {
  let component: LegalSupportListComponent;
  let fixture: ComponentFixture<LegalSupportListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalSupportListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalSupportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
