import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private _http: HttpClient) {}

  ngOnInit() {}

  getUsers() {
    return this._http.get('https://jsonplaceholder.typicode.com/users');
  }
}
