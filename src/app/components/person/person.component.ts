import { LogService } from './log.service';
import { PersonService } from './person.service';
import { Component, OnInit } from '@angular/core';

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

interface AllItems {
  users: any[];
  posts: any[];
}

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
  providers: [LogService],
})
export class PersonComponent implements OnInit {
  users: User[] = [];
  allItems: AllItems = {
    users: [],
    posts: [],
  };
  constructor(
    private personService: PersonService,
    private logService: LogService
  ) {}

  ngOnInit(): void {
    this.getAllUsers();
    this.getAllDetails();
  }

  getAllDetails() {
    this.personService.getAllInfo().subscribe((data: any) => {
      this.allItems.posts = data.posts;
      this.allItems.users = data.users;
    });
  }

  getAllUsers() {
    this.personService.getUsers().subscribe((data: any) => {
      this.users = data.data;
      this.logService.log('user fetch success');
    });
  }
}
