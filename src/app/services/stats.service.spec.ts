import { TestBed } from '@angular/core/testing';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { StatsService } from './stats.service';

describe('StatsService', () => {
  let spectator: SpectatorService<StatsService>;
  const createService = createServiceFactory({
    service: StatsService,
    mocks: [], // pass in other service deps
  });

  beforeEach(() => (spectator = createService()));
  it('should be created', () => {
    expect(spectator).toBeTruthy();
  });

  it('should calculate the sum', () => {
    const res = spectator.service.calculateSum([1, 2, 3]);
    expect(res).toBe(6);
    // const otherService = spectator.inject(OtherService);
    // otherService.someMethod.and.returnValue(false)
  });
});
