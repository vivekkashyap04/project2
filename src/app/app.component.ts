import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( public routes:Router){}
  title = 'app';
  log(){
      this.routes.navigate(['/login']);
  }
}
