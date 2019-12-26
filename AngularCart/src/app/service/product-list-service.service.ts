import { Injectable } from '@angular/core';
import{ProductList} from './ProductList'

@Injectable()
export class ProductListServiceService {
private prdList : ProductList[] = [
{
  productName : 'iPhone',
  productDesc :'Latest iphone with triple camera with 4k recording and slow motion 120fps',
  price : 1200
},
{
  productName : 'Samsung note 10+',
  productDesc :'latest samsung note range phone super amoload display with 90 fps screener refresh rate',
  price : 1400
}
]
  constructor() { }

  getProductList() : ProductList[]{
  return this.prdList;

  }

}
