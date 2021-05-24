import { Component, OnInit } from '@angular/core';
import { GuardAuthGuard } from '../guards/guard-auth.guard';
import { dataUser } from './login';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   admin = true
   user = new dataUser()
   showRequestLogin:boolean=true
  constructor(
    private userAuth: LoginService,
    private needLogin : GuardAuthGuard
  ) {}

  ngOnInit () {
    this.needLogin.requestLogin.subscribe(event => {
      this.showRequestLogin = event
    })
  }

  auth () {
    this.userAuth.authUser(this.user)
  }
  authAdmin () {
    this.userAuth.authAdmin(this.user)
  }
  changeAccount () {
    console.log('oiii')
  }
}
