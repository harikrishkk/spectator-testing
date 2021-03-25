// Note- Import is from spectator/jest
import { fakeAsync, tick } from '@angular/core/testing';
import {
  Spectator,
  createComponentFactory,
  byText,
} from '@ngneat/spectator/jest';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let spectator: Spectator<ButtonComponent>;
  const createComponent = createComponentFactory({
    component: ButtonComponent,
  });
  // spectator.fixture, ==> component's fixture
  // spectator.component ===> component's instance
  // spectator.element ==> component's native element
  // spectator.debugElement ===> component's debug element
  // spectator.inject ==> wrapper for TestBed.inject()

  // make sure we get a fresh instnce before each test case.
  beforeEach(() => {
    spectator = createComponent();
  });

  it('should have respective classes for the primary status', () => {
    // Arrange --> set the @Input of the component
    // spectator.setInput('btnClass', 'primary');
    spectator = createComponent({
      props: {
        btnClass: 'primary',
      },
    });

    // Assert
    expect(spectator.query('button')).toHaveClass('ui button mt-1 primary');
    expect(spectator.query('button')).not.toHaveClass('danger');
  });

  it('should have a button with text of Save', () => {
    expect(spectator.query('button')).toHaveText('Save');
  });

  it('should emit event on button click', () => {
    // Arrange
    let output;
    spectator.output('onBtnClick').subscribe((res) => (output = res));

    // Act
    // spectator.component.handleClick();
    spectator.click(byText('Save'));

    // Assert
    expect(output).toBeTruthy();
  });

  it('should change the button text asynchronously', fakeAsync(() => {
    spectator.component.handleClick();
    expect(spectator.query('button')).toHaveText('Save');
    spectator.tick(2000);
    expect(spectator.query('button')).toHaveText('Update');
  }));
});
