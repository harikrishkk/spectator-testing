import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';

describe('app component', () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory({
    component: AppComponent,
    declarations: [MockComponent(NavbarComponent)],
    imports: [RouterTestingModule],
  });
  beforeEach(() => (spectator = createComponent()));
  it('should handle the router outlet', () => {
    expect(spectator).toBeTruthy();
    expect(spectator.query('router-outlet')).toBeDefined();
  });
});
