import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalDocReceivedListComponent } from './total-doc-received-list.component';

describe('TotalDocReceivedListComponent', () => {
  let component: TotalDocReceivedListComponent;
  let fixture: ComponentFixture<TotalDocReceivedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalDocReceivedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalDocReceivedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
