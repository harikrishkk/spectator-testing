import { SumPipe } from './sum.pipe';
import {
  Spectator,
  createComponentFactory,
  SpectatorPipe,
  createPipeFactory,
} from '@ngneat/spectator/jest';
import { StatsService } from '../services/stats.service';
import { Component, Input } from '@angular/core';

@Component({
  template: `<div>{{ prop | sum }}</div>`,
})
class CustomHostComponent {
  @Input() public prop: number[] = [1, 2, 3];
}

describe('SumPipe', () => {
  let spectator: SpectatorPipe<SumPipe>;
  const createPipe = createPipeFactory({
    pipe: SumPipe,
    providers: [StatsService],
  });
  it('should sum up the given list of numbers (template)', () => {
    spectator = createPipe(`{{ [1, 2, 3] | sum }}`);
    expect(spectator.element).toHaveText('6');
  });

  it('should sum up the given list of numbers (prop)', () => {
    spectator = createPipe(`{{ prop | sum }}`, {
      hostProps: {
        prop: [10, 20, 30],
      },
    });
    expect(spectator.element).toHaveText('60');
  });

  it('should delegate the summation to the service', () => {
    const calculateSum = () => 42;
    const provider = { provide: StatsService, useValue: { calculateSum } };
    const statService = (spectator = createPipe(`{{ prop | sum }}`, {
      hostProps: {
        prop: [2, 40],
      },
      providers: [provider],
    }));
    expect(spectator.element).toHaveText('42');
  });
});

describe('custom host component', () => {
  let spectator: SpectatorPipe<SumPipe>;
  const createPipe = createPipeFactory({
    pipe: SumPipe,
    host: CustomHostComponent,
    providers: [StatsService],
  });

  it('should sum up the given list of numbers (template)', () => {
    spectator = createPipe(`{{ [1, 2, 3] | sum }}`);
    expect(spectator.element).toHaveText('6');
  });

  it('should delegate the summation to the service', () => {
    const calculateSum = () => 42;
    const provider = { provide: StatsService, useValue: { calculateSum } };
    const statService = (spectator = createPipe(`{{ prop | sum }}`, {
      hostProps: {
        prop: [2, 40],
      },
      providers: [provider],
    }));
    expect(spectator.element).toHaveText('42');
  });
});
