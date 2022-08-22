import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntfedListComponent } from './entfed-list.component';

describe('EntfedListComponent', () => {
  let component: EntfedListComponent;
  let fixture: ComponentFixture<EntfedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntfedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntfedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
