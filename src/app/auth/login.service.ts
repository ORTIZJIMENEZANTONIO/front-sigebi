import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
// import { JwtHelperService } from '@auth0/angular-jwt';
// import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  readonly url = environment.apiUrl;
  readonly token = environment.api_external_token;
  readonly userInfo = environment.api_external_userInfo;
  readonly userType = environment.api_external_typeUser;
  
  constructor(private http:HttpClient, /*private jwtHelper: JwtHelperService, */) { }

  async getToken(username: any, password: any){
    let data =  `client_id=indep-auth&grant_type=password&client_secret=AzOyl1GDe3G9mhI8c7cIEYQ1nr5Qdpjs&scope=openid&username=${username}&password=${password}`;
    return fetch(this.token, {
      method: 'POST', 
      body: data,
      headers:{
        'Content-Type' : 'application/x-www-form-urlencoded',
      }
    })
    .then(res => res.json())
    .catch(error => {
      return error;
    })
    .then(response => {
        return response;
    });
  }
  async getInfo(token:string){
    return fetch(this.userInfo, {
      method: 'GET', 
      headers:{
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + token,
      }
    })
    .then(res => res.json())
    .catch(error => {
      return error;
    })
    .then(response => {
        return response;
    });
  }

  getType(){
    return fetch(this.userType+localStorage.getItem("uid"), {
      method: 'GET', 
      headers:{
        'Content-Type' : 'application/json',
      }
    })
    .then(res => res.json())
    .catch(error => {
      return error;
    })
    .then(response => {
        return response;
    });
  }

  isAuth(): boolean{
    const token = localStorage.getItem('token');
    if (!localStorage.getItem("token")){
      localStorage.removeItem("token");
      localStorage.removeItem("uid");
      localStorage.removeItem("type");
      return false;
    }
    // const decode = this.jwtHelper.decodeToken(token?.toString());
    // if(this.jwtHelper.isTokenExpired(token?.toString()) || (decode.exp < (new Date().getTime() + 1) / 1000)){
    //     this.snackBar.open("La sesión expiró, inice de nuevo!", 'X', {
    //       duration: 3000,
    //       verticalPosition: 'top', // Allowed values are  'top' | 'bottom'
    //       horizontalPosition: 'right', // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
    //       panelClass: ['error-snackbar']
    //     });
    //     localStorage.removeItem("token");
    //     localStorage.removeItem("uid");
    //     localStorage.removeItem("type");
    //     return false;
    //   }
    return true;
  }


}
