import { Component, OnInit, OnDestroy } from '@angular/core';
import { Good } from '../interfaces/good.interface';
import { GoodsService } from 'src/app/services/goods.service';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  goods: Good[] = [];
  goodsOservable : Subscription;
  add: number = -1

  constructor(private gs: GoodsService, private cs:CartService, private as:AuthService, private router:Router) { }

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

  ngOnDestroy(){
    this.goodsOservable.unsubscribe();
  }

  addToCart(index: number){
    if (this.as.userId) this.add = +index;
    else this.router.navigate(['/login'])
  
  }

  buy(amount: number){
    let selectedGood = this.goods[this.add]
    let data = {
      name: selectedGood.name,
      amount: +amount,
      price: selectedGood.price,
      photoUrl: selectedGood.photoUrl

    }
    this.cs.addToCarte(data).then(() => this.add = -1)
  }


}
