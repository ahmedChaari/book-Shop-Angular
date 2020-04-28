import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { User } from '../components/interfaces/user.interface';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fs:AngularFirestore,private storage:AngularFireStorage ,private as:AuthService,private us:UserService) { }

  addNewUser(id , name, address){
    return this.fs.doc('users/' + id).set({
      name,
      address
    })
  }
  
  getUserService(){
    return this.fs.doc('users/' + this.as.userId).valueChanges()
  }

  getAllUser(){
    return this.fs.collection('users').snapshotChanges()
  }


}
