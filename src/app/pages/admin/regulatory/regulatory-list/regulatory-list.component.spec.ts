import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulatoryListComponent } from './regulatory-list.component';

describe('RegulatoryListComponent', () => {
  let component: RegulatoryListComponent;
  let fixture: ComponentFixture<RegulatoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegulatoryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegulatoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
