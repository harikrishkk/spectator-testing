import { StatsService } from './../services/stats.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sum',
})
export class SumPipe implements PipeTransform {
  constructor(private statService: StatsService) {}
  transform(value: number[]): number {
    return this.statService.calculateSum([10, 20, 30]);
  }
}
