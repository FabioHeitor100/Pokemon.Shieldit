import { TestBed } from '@angular/core/testing';

import { MasterLeagueAllService } from './master-league-all.service';

describe('MasterLeagueAllService', () => {
  let service: MasterLeagueAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterLeagueAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
