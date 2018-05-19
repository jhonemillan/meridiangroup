import { AuthService } from './auth.service';
import { Product } from './../model/product';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  apiUrl = 'http://localhost:3000/api';

  headers = new HttpHeaders({

    'Content-Type': 'application/json',
    'Authorization': this.auth.getToken(),
  });


  constructor(private http: HttpClient, private auth: AuthService) { }

  saveProduct(product: Product): Observable<any> {
   return this.http.post(this.apiUrl + '/products', product, {headers: this.headers});
  }

  getProducts(): Observable<Product[]> {
    console.log('entra');
    console.log('this us ' + this.auth.getToken());
    return this.http.get<Product[]>(this.apiUrl + '/products?access_token=' + this.auth.getToken(), {headers: this.headers});
  }

}
