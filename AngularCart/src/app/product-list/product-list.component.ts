import { Component, OnInit } from '@angular/core';
import {ProductListServiceService} from '../service/product-list-service.service';
import {ProductList} from '../service/ProductList'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
//code will go here for the product list
private objProductList : ProductList[];
  constructor(private prdService : ProductListServiceService) { }

  ngOnInit() {
    this.objProductList = this.prdService.getProductList();

  }

}
