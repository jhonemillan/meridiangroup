import { Coupon } from './../model/coupon';
import { AuthService } from './auth.service';
import { Product } from './../model/product';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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

   params = new HttpParams()
  .set('access_token', this.auth.getToken());


  constructor(private http: HttpClient, private auth: AuthService) { }

  saveProduct(product: Product): Observable<any> {
   return this.http.post(this.apiUrl + '/products', product, {headers: this.headers});
  }

  saveCoupon(coupon: Coupon): Observable<any> {
    return this.http.post(this.apiUrl + '/coupons?access_token=' + this.auth.getToken(), coupon, {headers: this.headers});
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl + '/products?access_token=' + this.auth.getToken(), {headers: this.headers});
  }

  getCoupons(): Observable<Coupon[]> {
    return this.http.get<Coupon[]>(this.apiUrl + '/coupons?access_token=' + this.auth.getToken(), {headers: this.headers});
  }

  inactiveProduct(id): Observable<any> {
    return this.http.delete(this.apiUrl + '/products/' + id, {params: this.params});
  }

  inactiveCoupon(id): Observable<any> {
    return this.http.delete(this.apiUrl + '/coupons/' + id, {params: this.params});
  }

}
