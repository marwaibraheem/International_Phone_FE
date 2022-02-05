import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCustomerByStateComponent } from './get-customer-by-state.component';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('GetCustomerByStateComponent', () => {
  let component: GetCustomerByStateComponent;
  let fixture: ComponentFixture<GetCustomerByStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCustomerByStateComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCustomerByStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
