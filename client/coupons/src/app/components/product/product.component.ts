import { Observable } from 'rxjs/Observable';
import { Product } from './../../model/product';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { DatePipe } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [DataService, AuthService]

})
export class ProductComponent implements OnInit {
  product: Product = {};
  products: Observable<Product[]>;

  constructor(private data: DataService, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    if (!this.auth.isAdmin()) {
      this.router.navigate(['/notfound']);
    }
    this.getProducts();
  }

  saveProduct() {
    this.product.inactive = false;
    this.product.createdAt = new Date().toString();

    this.data.saveProduct(this.product).subscribe(data => {
      console.log('se crea el producto');
      this.product = {};
      this.getProducts();
    });
  }

  getProducts() {
    this.products = this.data.getProducts();
  }

  inactiveProduct(id) {
    this.data.inactiveProduct(id).subscribe(data => {
      console.log(data);
    });
    this.getProducts();
  }

}
