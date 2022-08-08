import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaryListComponent } from './notary-list.component';

describe('NotaryListComponent', () => {
  let component: NotaryListComponent;
  let fixture: ComponentFixture<NotaryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotaryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotaryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
