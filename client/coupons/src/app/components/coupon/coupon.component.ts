import { DataService } from './../../services/data.service';
import { Coupon } from './../../model/coupon';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {
  coupon: Coupon = {};
  coupons: Observable<Coupon[]>;


  constructor(private auth: AuthService, private router: Router, private data: DataService) { }

  ngOnInit() {
    if (!this.auth.isAdmin()) {
      this.router.navigate(['/notfound']);
    }
    this.getCoupons();
  }

  saveCoupon() {
    this.coupon.inactive = false;
    this.coupon.createdAt = new Date().toString();

    this.data.saveCoupon(this.coupon).subscribe(data => {
      this.coupon = {};
      this.getCoupons();
    });

  }

  getCoupons() {
    this.coupons = this.data.getCoupons();
  }

  inactiveCoupon(id) {
    this.data.inactiveCoupon(id).subscribe(data => {
      console.log(data);
    });
    this.getCoupons();
  }

}
