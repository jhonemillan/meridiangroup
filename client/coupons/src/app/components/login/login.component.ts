import { AuthService } from './../../services/auth.service';
import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  user = new User();

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.setLoggedOn(); 
  }

  onLogin() {
    
    let user = this.user;
    this.authService.login(user).subscribe(response => {

      console.log(response);      
      
      let token = response.id;
      this.authService.setToken(token);
      this.authService.setLoggedOn();            
      this.router.navigate(['/product']);
    }, err => {

      console.log(err);
    })

  }
}
