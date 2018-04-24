import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name;
  password;
 

  constructor(public routes:Router,private user:LoginService) { }

  ngOnInit() {
  }
  loginUser(){
    
    if(this.name=="admin"){
      if(this.password==1234){
        this.user.setUserLoggedIn();
       this.routes.navigate(['/main']);
      }
      else if(this.password=="" ||this.password==null){
        alert("please enter password");
      }else{
        alert("incorrect password");
      }
    }else if(this.name==" " ||this.name==null){
      alert("enter your name");
    }else{
      alert("incorrect name");
    }
    
  }
}
