import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Modal';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products!: Product[];
  category!: string;
  constructor(
    private router: Router,
    private _activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {}
}
