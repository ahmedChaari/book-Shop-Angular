import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Shopping } from '../interfaces/shopping.interface';


import * as jspdf from 'jspdf'; 
import { forEach,sum} from 'lodash';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  

  @ViewChild('content',{static: true}) content: ElementRef;

  cart: Shopping[] = []

  

  constructor(private cs:CartService) { }

  ngOnInit() {
    this.cs.getCart().subscribe(cart =>{
      this.cart = cart.map(shopping => {
        return {
          id: shopping.payload.doc.id,
          ...shopping.payload.doc.data()
        }
      }) 
    })
  }

  
  delete(index){
    this.cs.delete(this.cart[index].id)
  }
  save(index){
    this.cs.save(this.cart[index].id, this.cart[index].amount )

  }

 // Function Of HTML to PDF
  makePdf() { 
  let doc = new jspdf();
  doc.addHTML(this.content.nativeElement, function() {
     doc.save("BookShop.pdf");
  });
}


// Function Of SUM THE ROW DATA

totalValue(retailerItemModel: any=[]){
  let total = 0;
  retailerItemModel.forEach((price) => {
    total += Number(price);
  })
  return total;
}





}
