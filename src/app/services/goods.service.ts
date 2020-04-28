import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { AuthService } from './auth.service';
import { Good } from '../components/interfaces/good.interface';


@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor(private fs:AngularFirestore, private storage:AngularFireStorage, private gs:GoodsService) {}

  getAllGoods(){
    return this.fs.collection('goods').snapshotChanges()
  }


  addNewGood(name:string , price:Number, image:File){
    let ref = this.storage.ref('goods/' + image.name)
    return ref.put(image).then(() =>{
      ref.getDownloadURL().subscribe(photoUrl => {
        this.fs.collection('goods').add({
          name,
          price,
          photoUrl
        })
      })
    } )
  }

delete(id: string){
    return this.fs.collection('goods').doc(id).delete();
  }


  savee(id, value){
    value.price = value.price.toLowerCase();
    return this.fs.collection('goods').doc(id).set(value);
  }

  save(id, price){
    return this.fs.doc(`goods/${id}`).update({
      price
    })
  }




}
