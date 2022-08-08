import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdosXCoorDetailComponent } from './edos-x-coor-detail.component';

describe('EdosXCoorDetailComponent', () => {
  let component: EdosXCoorDetailComponent;
  let fixture: ComponentFixture<EdosXCoorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdosXCoorDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdosXCoorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
