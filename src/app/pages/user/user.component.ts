import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  userId: string = '';
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.params.id;
  }
}
