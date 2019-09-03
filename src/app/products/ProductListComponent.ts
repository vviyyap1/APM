import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls:['./product-list.component.css']
})
export class ProductListComponent 
                    implements OnInit{
    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    filterProducts: IProduct[];
    errorMessage: string;
    //change to getter and setter to capture change in values
    _listFilter: string;
    get listFilter():string {
      return this._listFilter
    }
    set listFilter(value:string) {
      this._listFilter = value;
      this.filterProducts = (value? this.performFilter(value) : this.products);
    }
    products: IProduct[];

    constructor(private productService: ProductService){
    }

    toggleImage() : void {
        this.showImage = !this.showImage;
    }

    //on Init hook
    ngOnInit(): void {
        console.log('On Init hook');
        this.productService.getProducts()
              .subscribe({
                //style1: key, value style with arrow functioh
                next: (products) => {
                  this.products = products;
                  this.filterProducts = this.products;
                },
                //style 2: key as function name, no arrow function
                error(err){ this.errorMessage = err }
              });
        this.filterProducts = this.products;
    }
    performFilter(value: string): IProduct[] {
      value = value.toLowerCase();
      return this.products.filter((product:IProduct) =>
              product.productName.toLowerCase().indexOf(value) != -1);
      return;
    }

    onRatingClicked(message: string):void {
        console.log('notfied:'+message);
    }

}
