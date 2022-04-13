import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IProduct } from 'src/app/shared/models/product';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productId: string | null = null;
  product: IProduct = {} as IProduct;

  constructor(
    private activatedRoute: ActivatedRoute,
    private shopService: ShopService) { }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.productId = param.get('id');
    });
    if(this.productId)
    {
      this.shopService.getProduct(+this.productId).subscribe(product => {
        this.product = product
      }, error => {
        console.log(error);
      });
    }
  }
}
