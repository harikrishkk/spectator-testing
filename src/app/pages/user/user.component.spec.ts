import { Location } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  ActivatedRoute,
  NavigationStart,
  Router,
  RouterLink,
  RouterModule,
  UrlSegment,
} from '@angular/router';
import {
  Spectator,
  createComponentFactory,
  createHostFactory,
  SpectatorHost,
  SpectatorRouting,
  createRoutingFactory,
  byTextContent,
  byText,
} from '@ngneat/spectator/jest';
import { MockProvider } from 'ng-mocks';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let spectator: SpectatorRouting<UserComponent>;
  const url = [new UrlSegment('/', {})];
  const createComponent = createRoutingFactory({
    imports: [],
    component: UserComponent,
    mocks: [ActivatedRoute],
    params: { id: '5' },
    url,
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });

  it('should show the correct route param', () => {
    spectator.setRouteParam('id', '5');
    spectator.detectChanges();
    expect(spectator.component.userId).toBe('5');
  });

  it('should identify the link that navigates to home', () => {
    const subSpy = jest.fn();
    const subscription = spectator.router.events.subscribe(subSpy);
    const link1 = spectator.query('.link-1', { read: RouterLink });
    expect(link1?.routerLink).toEqual(['/']);
    spectator.emitRouterEvent(new NavigationStart(1, '/'));
    expect(subSpy).toHaveBeenCalled();
    subscription.unsubscribe();
  });
});

// https://github.com/ngneat/spectator/tree/master/projects/spectator/test
