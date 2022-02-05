import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCustomerByPhoneComponent } from './get-customer-by-phone.component';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('GetCustomerByPhoneComponent', () => {
  let component: GetCustomerByPhoneComponent;
  let fixture: ComponentFixture<GetCustomerByPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCustomerByPhoneComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCustomerByPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
