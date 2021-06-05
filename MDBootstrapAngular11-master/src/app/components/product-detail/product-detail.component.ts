import { Component, OnInit } from '@angular/core';
import{ ProductService} from 'src/app/product.service';
import{ActivatedRoute} from '@angular/router';
import{Product}from 'src/app/model/product'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
product:Product[]=[];
  constructor(private routes:ActivatedRoute,private productservice: ProductService) { }

  ngOnInit(): void {
  }
getStudent(){
  let id =this.routes.snapshot.paramMap.get('id');
  this.productservice.getProductsById(id);
  
}
}
