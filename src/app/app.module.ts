import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes} from '@angular/router';



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { PaymentComponent } from './payment/payment.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginService } from './login.service';
import { AuthGuard } from './auth.guard';


const routes:Routes=[
  {path:'login',component:LoginComponent},
  {path:'',component:MainComponent},
  {path:'main',canActivate:[AuthGuard], component:MainComponent},
  {path:'checkout', component:CheckoutComponent},
  {path:'payment',component:PaymentComponent},
  {path:'',redirectTo:'/main',pathMatch:'full'}

]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    PaymentComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,RouterModule.forRoot(routes)
  ],
  providers: [LoginService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
