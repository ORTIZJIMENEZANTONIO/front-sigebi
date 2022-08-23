import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderGobComponent } from './header-gob.component';

describe('HeaderGobComponent', () => {
  let component: HeaderGobComponent;
  let fixture: ComponentFixture<HeaderGobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderGobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderGobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
