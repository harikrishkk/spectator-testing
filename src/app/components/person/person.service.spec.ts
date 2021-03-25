import { TestBed } from '@angular/core/testing';
import {
  createHttpFactory,
  HttpMethod,
  Spectator,
  SpectatorHttp,
} from '@ngneat/spectator';

import { PersonService } from './person.service';

describe('PersonService', () => {
  let spectator: SpectatorHttp<PersonService>;
  const createHttp = createHttpFactory(PersonService);
  beforeEach(() => (spectator = createHttp()));

  it('can test Http client get', () => {
    spectator.service.getUsers().subscribe();
    spectator.expectOne('https://reqres.in/api/users', HttpMethod.GET);
  });

  it('should fetch multiple api calls', () => {
    spectator.service.getAllInfo().subscribe();
    const reqs = spectator.expectConcurrent([
      {
        url: 'https://jsonplaceholder.typicode.com/users',
        method: HttpMethod.GET,
      },
      {
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: HttpMethod.GET,
      },
    ]);
    spectator.flushAll(reqs, [{}, {}]);
    // expect(spectator.httpClient.request.length).toBe(2);
  });
});
