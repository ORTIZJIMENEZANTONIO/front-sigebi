import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiabClasificationListComponent } from './siab-clasification-list.component';

describe('SiabClasificationListComponent', () => {
  let component: SiabClasificationListComponent;
  let fixture: ComponentFixture<SiabClasificationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiabClasificationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiabClasificationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
