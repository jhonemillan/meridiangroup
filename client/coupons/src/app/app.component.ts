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

  constructor(private authService: AuthService) {}

   ngOnInit(){
    this.isLoggedIn$ = this.authService.isLoggedUser;
    console.log(this.authService.isLoggedUser);
   }

  onLogoutClick(){
    this.authService.logout().subscribe(res => {
      this.authService.setLoggedOff();
      console.log(res);
    })
  }
}


