import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReqResponse, User } from '../models/app-models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  public getUsers(): Observable<ReqResponse> {
    return this.httpClient.get<ReqResponse>(
      'https://reqres.in/api/users?delay=1'
    );
  }
  
  public addUser(user: User): Observable<User> {
    return this.httpClient.post<User>("urlllllll", user);
  }
}
