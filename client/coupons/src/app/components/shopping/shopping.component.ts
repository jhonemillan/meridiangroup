import { Compra } from './../../model/compra';
import { Articulo } from './../../model/articulo';
import { Observable } from 'rxjs/Observable';
import { Product } from './../../model/product';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { DatePipe } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  product: Product = {};
  compra: Compra = {};
  articulo: Articulo = {};
  products: Observable<Product[]>;
  shoppingCar: Articulo[] = [];
  qty = 0;
  total = 0;
  coupon;

  constructor(private data: DataService, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    if (this.auth.isAdmin()) {
      this.router.navigate(['/notfound']);
    }
    this.getProducts();
  }

  getProducts() {
    this.products = this.data.getProductsActive();
  }

  agregar(product: Product) {
    console.log(product);
    const nuevo = {
      id : product.id,
      name : product.name,
    price : product.price
    };
    this.shoppingCar.push(nuevo);
  }

  calcular() {
    let suma = 0;
    this.shoppingCar.forEach(function (value) {
      suma += value.qty * value.price;
    });

    this.total = suma;
  }

  comprar() {
    this.compra.fecha = new Date;
    this.compra.total = this.total;
    this.compra.coupon = this.coupon;

    this.data.saveCompra(this.compra).subscribe(data => {
      console.log(data);
    });

  }



}
