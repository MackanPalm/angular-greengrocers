import { TestBed } from '@angular/core/testing';

import { GreenGrocersServiceService } from './green-grocers-service.service';

describe('GreenGrocersServiceService', () => {
  let service: GreenGrocersServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GreenGrocersServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
