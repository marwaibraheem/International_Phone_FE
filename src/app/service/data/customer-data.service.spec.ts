import { TestBed } from '@angular/core/testing';

import { CustomerDataService } from './customer-data.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient} from '@angular/common/http';

describe('CustomerDataService', () => {
  let service: CustomerDataService;
  let httpMock:HttpTestingController;
  let httpClient:HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[CustomerDataService]
    });
    service = TestBed.inject(CustomerDataService);
    httpMock=TestBed.get(HttpTestingController);
    httpClient=TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
