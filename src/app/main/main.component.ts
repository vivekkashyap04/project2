import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { LISTS } from '../arr';
import { Hero } from '../mock';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
     
      lists=LISTS;
      select=Hero["price"];
      some=Hero["quantity"];
      price:number=0;
       qty:number=0;
   
       addToCart(list:Hero):void{
        this.select = list;
      this.price+=this.select;
      this.qty+=1;
    }
    reset(){
      this.price=null;
      this.qty=0;
      this.select='';
    
    }
    
  constructor(public routes:Router,public user:LoginService) { }

  ngOnInit() {
  }
  checkOut(){
    if(this.price){
      this.user.setUserLoggedIn();
      this.routes.navigate(['/checkout']);
    }else{
      alert("select product");
    }

  }

}
