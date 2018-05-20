import { AuthService } from './../../services/auth.service';
import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  user: User = {};

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  onLogin() {
    const user = this.user;
    this.authService.login(user).subscribe(response => {
      console.log(response);
      const token = response.id;
      this.authService.setToken(token);
      this.authService.setLoggedOn(true);
      this.router.navigate(['/product']);
    }, err => {

      console.log(err);
    });

    this.authService.getTheBoolean().subscribe(value => console.log(value));

  }
}
