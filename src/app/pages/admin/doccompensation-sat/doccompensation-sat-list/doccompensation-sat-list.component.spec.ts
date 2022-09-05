import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoccompensationSatListComponent } from './doccompensation-sat-list.component';

describe('DoccompensationSatListComponent', () => {
  let component: DoccompensationSatListComponent;
  let fixture: ComponentFixture<DoccompensationSatListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoccompensationSatListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoccompensationSatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
