import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
/*------------------------------------------------------------*/
// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsXrTcznvaBhFDSj7Qx2We7qoUQ0W5pOU",
  authDomain: "adolfodelgado-441e6.firebaseapp.com",
  projectId: "adolfodelgado-441e6",
  storageBucket: "adolfodelgado-441e6.appspot.com",
  messagingSenderId: "741800052237",
  appId: "1:741800052237:web:327c16126491d4b0edf744"
};
/*------------------------------------------------------------*/

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
