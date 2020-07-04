import { TestBed } from '@angular/core/testing';

import { GenIService } from './gen-i.service';

describe('GenIService', () => {
  let service: GenIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
