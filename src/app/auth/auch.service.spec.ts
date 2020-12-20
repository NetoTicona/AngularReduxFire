import { TestBed } from '@angular/core/testing';

import { AuchService } from './auch.service';

describe('AuchService', () => {
  let service: AuchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
