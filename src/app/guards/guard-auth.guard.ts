import { Injectable, EventEmitter } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class GuardAuthGuard implements CanActivate {
   requestLogin = new EventEmitter<boolean>()

    constructor(
    private authUser : LoginService,
    private router: Router
    ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean> | boolean {
      if(this.authUser.confirmedAuth()){
        return true
      }
      this.router.navigate(['/login'])
      this.requestLogin.emit(false)
      return false
  }

}
