import { User } from './../model/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthService {

  apiUrl = 'http://localhost:3000/api';

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.getToken(),
  });

  private loggedIn = new BehaviorSubject<boolean>(false);
  isLogged = this.loggedIn.asObservable();

  public onAuthChange$: Subject<User>;


  constructor(private http: HttpClient) {
    this.onAuthChange$ = new Subject();
  }

  login(user: User): Observable<any> {
    return this.http.post(this.apiUrl + '/Users/login', user);
  }

  logout(): Observable<any> {

    const url = this.apiUrl + '/Users/logout';
    const data = {access_token: this.getToken()};
    return this.http.post(url, data, {headers: this.headers});
  }

  setToken(token: string) {

    localStorage.setItem('accessToken', token);
  }

  getToken(): string {
    return localStorage.getItem('accessToken');
  }

  setUser(user: User) {
    this.onAuthChange$.next(user);
    const userString = JSON.stringify(user);
    localStorage.setItem('currentUser', userString);

  }

  setLoggedOn(option: boolean): void {
    this.loggedIn.next(option);
  }

  get isLoggedUser() {
    return this.loggedIn.asObservable();
  }

  public getTheBoolean(): Observable<boolean> {
    return this.loggedIn.asObservable();
}

  logOutAuth() {
    this.onAuthChange$.next(null);
    localStorage.removeItem('currentUser');
    localStorage.removeItem('accessToken');
  }


}
