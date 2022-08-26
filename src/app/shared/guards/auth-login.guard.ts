import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../../auth/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardLogin implements CanActivate {

  constructor(private auth: LoginService, private router:Router){}

  canActivate():boolean {
    if(this.auth.isLogout()){
      this.router.navigate(['pages']);
    }
    return true;
  }
}
