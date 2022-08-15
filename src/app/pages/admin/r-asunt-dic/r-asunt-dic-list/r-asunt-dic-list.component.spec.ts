import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RAsuntDicListComponent } from './r-asunt-dic-list.component';

describe('RAsuntDicListComponent', () => {
  let component: RAsuntDicListComponent;
  let fixture: ComponentFixture<RAsuntDicListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RAsuntDicListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RAsuntDicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
