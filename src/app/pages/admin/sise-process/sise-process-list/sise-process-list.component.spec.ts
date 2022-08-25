import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiseProcessListComponent } from './sise-process-list.component';

describe('SiseProcessListComponent', () => {
  let component: SiseProcessListComponent;
  let fixture: ComponentFixture<SiseProcessListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiseProcessListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiseProcessListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
