import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent {
  title = 'app';
  isLoggedIn$: Observable<boolean>;
  isEnable = false;

  constructor(private authService: AuthService, private router: Router) {

  }

   OnInit() {

   }

   enabled() {
    return this.authService.isAdmin();
   }

  onLogoutClick() {
    this.authService.logout().subscribe(res => {
      this.authService.logOutAuth();
      this.router.navigate(['/login']);
    });
  }
}


