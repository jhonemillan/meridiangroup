import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule, ReactiveFormsModule, FormControl, NgControl} from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { provideRoutes} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CouponComponent } from './components/coupon/coupon.component';
import { ProductComponent } from './components/product/product.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'product', component: ProductComponent },
  { path: 'shopping', component: ShoppingComponent },
  { path: 'coupon', component: CouponComponent },
  { path: '**', component: NotfoundComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CouponComponent,
    ProductComponent,
    ShoppingComponent,
    NotfoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
