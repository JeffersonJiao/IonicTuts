import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  images = ['img1.jpg','img2.jpg','img3.jpg','img4.jpg','img5.jpg'];
  
  logout(){
    var root = this.app.getRootNav();
    root.popToRoot();
  }
  constructor(public navCtrl: NavController,public app: App) {

  }

}
