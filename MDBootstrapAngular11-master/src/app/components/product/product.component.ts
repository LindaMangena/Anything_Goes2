import { Component, OnInit } from '@angular/core';
import{ Product}from 'src/app/ProductInter';
import { Router } from '@angular/router';

import { from } from 'rxjs';
@Component({
  selector: 'Product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {

  product: Product[] =[
    {
      id: 1,
      name: 'pulley',
      rentBy:'mahlatse',
      level:'tool',
      image:'R1000',
    },
    
  ] 
    
    


  
    


  





  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  rentProduct () {
    this.router.navigate(['rent', 2]);
  }

}
