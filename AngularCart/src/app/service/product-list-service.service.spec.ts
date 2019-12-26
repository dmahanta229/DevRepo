import { TestBed, inject } from '@angular/core/testing';

import { ProductListServiceService } from './product-list-service.service';

describe('ProductListServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductListServiceService]
    });
  });

  it('should ...', inject([ProductListServiceService], (service: ProductListServiceService) => {
    expect(service).toBeTruthy();
  }));
});
