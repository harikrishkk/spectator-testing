import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get('https://reqres.in/api/users');
  }

  getAllInfo() {
    return forkJoin([
      this.http.get<any[]>('https://jsonplaceholder.typicode.com/users'),
      this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts'),
    ]).pipe(
      map(([users, posts]) => {
        return {
          users: users.slice(1, 3),
          posts: posts.slice(1, 3),
        };
      })
    );
  }
}
