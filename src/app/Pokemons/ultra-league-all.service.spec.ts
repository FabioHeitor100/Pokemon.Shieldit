import { TestBed } from '@angular/core/testing';

import { UltraLeagueAllService } from './ultra-league-all.service';

describe('UltraLeagueAllService', () => {
  let service: UltraLeagueAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UltraLeagueAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
