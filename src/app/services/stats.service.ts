import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StatsService {
  constructor() {}

  calculateSum(value: number[]) {
    let sum = 0;
    value.forEach((v) => (sum = sum + v));
    return sum;
  }
}
