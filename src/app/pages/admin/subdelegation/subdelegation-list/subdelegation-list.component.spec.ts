import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubdelegationListComponent } from './subdelegation-list.component';

describe('SubdelegationListComponent', () => {
  let component: SubdelegationListComponent;
  let fixture: ComponentFixture<SubdelegationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubdelegationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubdelegationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
