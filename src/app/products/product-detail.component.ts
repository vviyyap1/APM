import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = "Product Detail";
  product: IProduct;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //+ to convert id to numeric
    let id = +this.route.snapshot.paramMap.get("id");
    this.pageTitle += `: ${id}`;
    this.product = {
        'productId' : id,
        'productName' : 'Leaf Rake',
        'productCode' : 'GDN-011',
        'releaseDate' : 'March 10, 2015',
        'description' : ' Leaf rake model',
        'price' : 19.95,
        'starRating' : 3.2,
        'imageUrl' : 'assets/images/leaf_rake.png'
    };
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
