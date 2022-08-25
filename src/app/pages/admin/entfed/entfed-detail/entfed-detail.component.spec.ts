import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntfedDetailComponent } from './entfed-detail.component';

describe('EntfedDetailComponent', () => {
  let component: EntfedDetailComponent;
  let fixture: ComponentFixture<EntfedDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntfedDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntfedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
