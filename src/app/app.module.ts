import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

//materials Angular






import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoodsComponent } from './components/goods/goods.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';




import { FooterComponent } from './components/footer/footer.component';
import { BookComponent } from './components/book/book.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { ClientComponent } from './components/client/client.component';

@NgModule({
  declarations: [
    AppComponent,
    GoodsComponent,
    CartComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    NotFoundComponent,
    NavbarComponent,
    FooterComponent,
    BookComponent,
    FavoriteComponent,
    ClientComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyB6n-LCsDaOoR-rJehHXDQQ_3MhfHhQOj0",
        authDomain: "market-54ad7.firebaseapp.com",
        databaseURL: "https://market-54ad7.firebaseio.com",
        projectId: "market-54ad7",
        storageBucket: "market-54ad7.appspot.com",
        messagingSenderId: "821324251073",
        appId: "1:821324251073:web:1b02667452fa1478"
      }),
      AngularFirestoreModule,
      AngularFireAuthModule,
      AngularFireStorageModule,
      BrowserAnimationsModule,
      AngularFontAwesomeModule,
  
    
      


  ],
  providers: [
    {provide: FirestoreSettingsToken, useValue: {} },
    
  ],

 

  bootstrap: [AppComponent]
})
export class AppModule { }

