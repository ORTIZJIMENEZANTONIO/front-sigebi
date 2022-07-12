import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficialLegendsListComponent } from './official-legends-list.component';

describe('OfficialLegendsListComponent', () => {
  let component: OfficialLegendsListComponent;
  let fixture: ComponentFixture<OfficialLegendsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficialLegendsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficialLegendsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
