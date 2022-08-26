import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoccompensationListComponent } from './doccompensation-list.component';

describe('DoccompensationListComponent', () => {
  let component: DoccompensationListComponent;
  let fixture: ComponentFixture<DoccompensationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoccompensationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoccompensationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
