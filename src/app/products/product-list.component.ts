import {Component, OnInit} from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle:string='Product List';
    imageWidth:Number=50;
    imageMargin:Number=2;
    showImage:boolean=false;
    _listFilter: string;
    errorMessage: string;
    filteredProducts: IProduct[];
    constructor(private productService: ProductService)
    {

    }
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }
    
    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
              product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    products:IProduct[]=[];
    toggleImage():void{
        this.showImage = !this.showImage;
    }
    ngOnInit():void
    {
        this.productService.getProducts()
        .subscribe(products => {
            this.products = products;
            this.filteredProducts = this.products;
        },
            error => this.errorMessage = <any>error);
        this.filteredProducts=this.products;
    }
}