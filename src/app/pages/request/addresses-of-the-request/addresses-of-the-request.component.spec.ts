import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressesOfTheRequestComponent } from './addresses-of-the-request.component';

describe('AddressesOfTheRequestComponent', () => {
  let component: AddressesOfTheRequestComponent;
  let fixture: ComponentFixture<AddressesOfTheRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressesOfTheRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressesOfTheRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
