import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Modal';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  products!: Product[];
  constructor(private productservice: ProductService) {}

  ngOnInit(): void {
    this.productservice.getAllProduct().subscribe((data) => {
      this.products = data;
    });
  }
}
