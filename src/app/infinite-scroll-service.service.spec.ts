import { TestBed } from '@angular/core/testing';

import { InfiniteScrollServiceService } from './infinite-scroll-service.service';

describe('InfiniteScrollServiceService', () => {
  let service: InfiniteScrollServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfiniteScrollServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
