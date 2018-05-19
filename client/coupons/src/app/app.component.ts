import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent {
  title = 'app';
  isLoggedIn$: Observable<boolean>;
  isEnable =  false;
  constructor(private authService: AuthService) {

  }

   OnInit() {
   }

   enabled() {
    this.authService.isLoggedUser.subscribe(data => this.isEnable = data);
   }

  onLogoutClick() {
    this.authService.logout().subscribe(res => {

      console.log(res);
    });
  }
}


