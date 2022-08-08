import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficialLegendsDetailComponent } from './official-legends-detail.component';

describe('OfficialLegendsDetailComponent', () => {
  let component: OfficialLegendsDetailComponent;
  let fixture: ComponentFixture<OfficialLegendsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficialLegendsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficialLegendsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
