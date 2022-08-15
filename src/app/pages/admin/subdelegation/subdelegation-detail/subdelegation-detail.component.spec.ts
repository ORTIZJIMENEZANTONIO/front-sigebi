import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubdelegationDetailComponent } from './subdelegation-detail.component';

describe('SubdelegationDetailComponent', () => {
  let component: SubdelegationDetailComponent;
  let fixture: ComponentFixture<SubdelegationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubdelegationDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubdelegationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
