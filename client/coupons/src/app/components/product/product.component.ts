import { Product } from './../../model/product';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [DataService]

})
export class ProductComponent implements OnInit {
  product: Product = {};

  constructor(private data: DataService) { }

  ngOnInit() {
    this.saveProduct();
  }

  saveProduct() {
    this.product.inactive = false;
    this.product.createdAt = new Date().toString();

    this.data.saveProduct(this.product).subscribe(data => {
      console.log('se crea el producto');
      this.product = {};
    });

  }

}
