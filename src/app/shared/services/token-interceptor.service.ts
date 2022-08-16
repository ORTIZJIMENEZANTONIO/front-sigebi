import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService  implements HttpInterceptor{
  intercept(req:HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{
    const token = localStorage.getItem("token");
    const tokenHeader = req.clone({
      setHeaders:{
        Authorization: `Bearer ${token}`
      }
    }); 
    return next.handle(tokenHeader);
  }
  manejarError(error: HttpErrorResponse){
    return throwError(error);
  }
  constructor() { }
}
