import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../../auth/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: LoginService, private router:Router){}

  canActivate():boolean {
    if(!this.auth.isAuth()){
      this.router.navigate(['auth/login']);
      return false;
    }
    return true;
  }
}
