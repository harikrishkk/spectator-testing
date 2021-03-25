import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss'],
})
export class TotalComponent implements OnInit {
  price = [10, 15, 35];

  constructor() {}

  ngOnInit(): void {}
}
