import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http : HttpClient) { }
  uri ="http://localhost:8080/auth";
  authenticatedUser : User;

  login() : void {
    this.http.get<User>(this.uri).map(data =>data).subscribe(data => {
      this.authenticatedUser = data
    });
  }

}
