import {
  createDirectiveFactory,
  SpectatorDirective,
} from '@ngneat/spectator/jest';
import { HighlightDirective } from './highlight.directive';

describe('HighlightDirective', () => {
  let spectator: SpectatorDirective<HighlightDirective>;
  const createDirective = createDirectiveFactory(HighlightDirective);

  beforeEach(() => {
    spectator = createDirective(
      `<div appHighlight>Testing Highlight Directive</div>`
    );
  });

  it('should get the instance', () => {
    const instance = spectator.directive;
    expect(instance).toBeDefined();
  });

  it('should change the background color', () => {
    // needs to mock getComputedStyle
    // Object.defineProperty(window, 'getComputedStyle', {
    //   value: () => ({
    //     getPropertyValue: (prop: any) => {
    //       return '';
    //     },
    //   }),
    // });
    spectator.dispatchMouseEvent(spectator.element, 'mouseover');

    expect(spectator.element).toHaveClass('box_shadow');

    spectator.dispatchMouseEvent(spectator.element, 'mouseout');
    expect(spectator.element).not.toHaveClass('box_shadow');
  });
});
