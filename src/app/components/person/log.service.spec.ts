import { TestBed } from '@angular/core/testing';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';

import { LogService } from './log.service';

describe('LogService', () => {
  let spectator: SpectatorService<LogService>;
  const createService = createServiceFactory(LogService);

  beforeEach(() => (spectator = createService()));

  it('should be created', () => {
    expect(spectator).toBeTruthy();
  });

  it('should console log', () => {
    const spy = jest.spyOn(console, 'log').mockImplementation();
    spectator.service.log('test');
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('test');
    spy.mockRestore();
  });
});
