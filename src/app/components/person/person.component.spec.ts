import { LogService } from './log.service';
import { PersonService } from './person.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { PersonComponent } from './person.component';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

describe('PersonComponent', () => {
  let spectator: Spectator<PersonComponent>;
  const createComponent = createComponentFactory({
    component: PersonComponent,
    mocks: [PersonService],
    componentMocks: [LogService],
    detectChanges: false,
    imports: [RouterTestingModule],
  });
  beforeEach(() => (spectator = createComponent()));

  it('should check the function call on load', () => {
    const personService = spectator.inject(PersonService);
    const logService = spectator.inject(LogService, true);
    const data = {
      data: [
        { id: 1, name: 'A' },
        { id: 2, name: 'AB' },
        { id: 3, name: 'ABC' },
      ],
    };
    const data2 = {
      users: [1, 2, 3],
      posts: [5, 6, 7],
    };
    personService.getUsers.mockReturnValue(of(data));
    personService.getAllInfo.mockReturnValue(of(data2));
    spectator.detectChanges();
    expect(spectator.component.users.length).toBe(3);
    expect(spectator.component.allItems.users.length).toBe(3);
    expect(spectator.component.allItems.posts.length).toBe(3);
    expect(logService.log).toHaveBeenCalledWith('user fetch success');
  });
});
