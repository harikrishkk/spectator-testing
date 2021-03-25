import { HomeComponent } from './home.component';

import {
  Spectator,
  createComponentFactory,
  createHostFactory,
  SpectatorHost,
} from '@ngneat/spectator/jest';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MockComponent } from 'ng-mocks';

import { SpectatorHttp } from '@ngneat/spectator';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { PersonComponent } from 'src/app/components/person/person.component';
import { TotalComponent } from 'src/app/components/total/total.component';
describe('AppComponent', () => {
  let spectator: Spectator<HomeComponent>;
  const createComponent = createComponentFactory(HomeComponent);
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        HomeComponent,
        MockComponent(ButtonComponent),
        MockComponent(PersonComponent),
        MockComponent(TotalComponent),
      ],
    }).compileComponents();
  });
  beforeEach(() => (spectator = createComponent()));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should show the paragraph on button click', () => {
    spectator.component.isClicked = false;
    spectator.triggerEventHandler(ButtonComponent, 'onBtnClick', true);
    expect(spectator.component.isClicked).toBeTruthy();
    expect(spectator.query('section')).toBeVisible();
    expect(spectator.component.isClicked).toBeTruthy();
  });
});

describe('Host component', () => {
  let spectator: SpectatorHost<ButtonComponent>;
  const createHost = createHostFactory(ButtonComponent);
  it('should check the class of button via host', () => {
    spectator = createHost(`<app-button [btnClass]="btnClass"></app-button>`, {
      hostProps: {
        btnClass: 'secondary',
      },
    });

    expect(spectator.query('button')).toHaveClass('ui button mt-1 secondary');
    spectator.setHostInput({
      btnClass: 'tertiary',
    });
    expect(spectator.query('button')).toHaveClass('ui button mt-1 tertiary');
    expect(spectator.query('button')).toHaveText('Save');
  });
});

/**
 *
 * hostFixture - The host's fixture
   hostComponent - The host's component instance
   hostElement - The host's native element
   hostDebugElement - The host's fixture debug element
   setHostInput - Changes the value of an @Input() of the host component
   queryHost - Read more about querying in Spectator
   queryHostAll - Read more about querying in Spectator
 */
