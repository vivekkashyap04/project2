import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(public routes:Router,public user:LoginService) { }

  ngOnInit() {
  }
  x;
  confirm(){
    if(this.x){
      this.routes.navigate(['/payment']);
    }else{
      alert("please select payment");
    }
  }
}
