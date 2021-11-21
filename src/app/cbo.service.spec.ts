import { TestBed } from '@angular/core/testing';

import { CboService } from './cbo.service';

describe('CboService', () => {
  let service: CboService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CboService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
