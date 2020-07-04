import { TestBed } from '@angular/core/testing';

import { GreatLeagueAllService } from './great-league-all.service';

describe('GreatLeagueAllService', () => {
  let service: GreatLeagueAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GreatLeagueAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
