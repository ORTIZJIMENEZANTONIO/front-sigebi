import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfaiSerieListComponent } from './ifai-serie-list.component';

describe('IfaiSerieListComponent', () => {
  let component: IfaiSerieListComponent;
  let fixture: ComponentFixture<IfaiSerieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfaiSerieListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IfaiSerieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
