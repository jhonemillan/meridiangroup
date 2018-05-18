import { User } from './../model/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthService {

  apiUrl = "http://localhost:3000/api"

  headers = new HttpHeaders({
    "Content-Type": "application/json",
    'Authorization': this.getToken(),
  });

  public loggedIn = new BehaviorSubject<boolean>(false);

  public onAuthChange$: Subject<User>;


  constructor(private http:HttpClient) { 
    this.onAuthChange$ = new Subject();    
  }

  login(user: User): Observable<any>{
    return this.http.post(this.apiUrl + '/Users/login',user);
  }

  logout(): Observable<any>{

    let url = this.apiUrl + '/Users/logout';
    let data = {accessTokenId: this.getToken()};
    return this.http.post(url, data, {headers: this.headers})
  }

  setToken(token: string) {

    localStorage.setItem("accessToken", token);
  }

  getToken(): string {
    return localStorage.getItem("accessToken");
  }

  setUser(user: User) {
    this.onAuthChange$.next(user);
    let userString = JSON.stringify(user);
    localStorage.setItem("currentUser", userString);

  }

  setLoggedOn(){
    this.loggedIn.next(true);
    console.log('set en true');
  }

  
  setLoggedOff(){
    this.loggedIn.next(false);
  }


  get isLoggedUser(){  
    return this.loggedIn.asObservable();
  }

  logOutAuth(){
    this.onAuthChange$.next(null);    
    localStorage.removeItem("currentUser");
    localStorage.removeItem("accessToken");
  }


}
