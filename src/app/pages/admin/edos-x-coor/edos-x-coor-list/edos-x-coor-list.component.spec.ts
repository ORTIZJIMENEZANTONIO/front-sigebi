import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdosXCoorListComponent } from './edos-x-coor-list.component';

describe('EdosXCoorListComponent', () => {
  let component: EdosXCoorListComponent;
  let fixture: ComponentFixture<EdosXCoorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdosXCoorListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdosXCoorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
