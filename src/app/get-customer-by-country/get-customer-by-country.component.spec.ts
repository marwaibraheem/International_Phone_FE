import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCustomerByCountryComponent } from './get-customer-by-country.component';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('GetCustomerByCountryComponent', () => {
  let component: GetCustomerByCountryComponent;
  let fixture: ComponentFixture<GetCustomerByCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCustomerByCountryComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCustomerByCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
