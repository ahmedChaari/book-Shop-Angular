import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Good } from '../interfaces/good.interface';
import { NgForm } from '@angular/forms';
import { GoodsService } from 'src/app/services/goods.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
  
})
export class GoodsComponent implements OnInit {


  goods: Good[] = [];
  goodsOservable : Subscription;
  


  @ViewChild('image',{static: false}) image: ElementRef

  constructor(private gs:GoodsService, private cs:CartService, private router:Router) { }

  ngOnInit() {
    this.goodsOservable = this.gs.getAllGoods().subscribe(data => {
      this.goods = data.map(element => {
        return {
          id: element.payload.doc.id,
           /* on a deux chois soi on utilse ca 
           ...element.payload.doc.data()
           ou bien */
          name: element.payload.doc.data()['name'],
          price: element.payload.doc.data()['price'],
          photoUrl: element.payload.doc.data()['photoUrl']
         
        }
      })
    })
  }

  
   addNewGood(form: NgForm){
      let name = (<Good>form.value).name,
          price = (<Good>form.value).price,
          image = (<HTMLInputElement>this.image.nativeElement).files[0];
      this.gs.addNewGood(name, price, image)
    
      .then(
        res => {
          this.router.navigate(['/']);
        },
        err => {
          console.log(err);
        }
      )
    }


    delete(index){
      this.gs.delete(this.goods[index].id)
      .then(
        res => {
          this.router.navigate(['/admin']);
        },
        err => {
          console.log(err);
        }
      )
    }
  

   
    save(index){
      this.gs.save(this.goods[index].id, this.goods[index].price)
      .then(
        res => {
          this.router.navigate(['/admin']);
        }
      )
    }

}
