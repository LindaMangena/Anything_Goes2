import { Injectable } from '@angular/core';
import{Product} from 'src/app/model/product'
import { Products } from './productMock';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
ProductById: Product[]=[]
  constructor() { }

  getAllProducts():Product[]{
    return Products;
  }


  getProductsById(id:any){
this.ProductById=[];
for (let i = 0; i < Products.length; i++) {
  if (Products[i].id == id) {
    this.ProductById.push(Products[i]);
    
  }
  
}
  }
}
