import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RAsuntDicDetailComponent } from './r-asunt-dic-detail.component';

describe('RAsuntDicDetailComponent', () => {
  let component: RAsuntDicDetailComponent;
  let fixture: ComponentFixture<RAsuntDicDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RAsuntDicDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RAsuntDicDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
