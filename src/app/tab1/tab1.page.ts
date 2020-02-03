import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  prList = [];
  constructor(private router: Router) {}

  ionViewWillEnter(){
    let list = JSON.parse(localStorage.getItem("lista-pr"));
    if(list){
      this.prList = list;
    }
  }

  openDetails(item){
    this.router.navigate(["/pr-details",{ id: item.id }]);
  }

}
