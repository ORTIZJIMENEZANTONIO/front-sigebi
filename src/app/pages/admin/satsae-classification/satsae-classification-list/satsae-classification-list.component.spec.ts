import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatsaeClassificationListComponent } from './satsae-classification-list.component';

describe('SatsaeClassificationListComponent', () => {
  let component: SatsaeClassificationListComponent;
  let fixture: ComponentFixture<SatsaeClassificationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SatsaeClassificationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SatsaeClassificationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
