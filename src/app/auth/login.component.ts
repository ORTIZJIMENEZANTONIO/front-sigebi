import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService} from './login.service';
// import { first, map} from 'rxjs';

// import { LoginService } from '../login/login.service';
// import {MatSnackBar} from '@angular/material/snack-bar';
// import { MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  hide = true;
  constructor(private formBuilder:FormBuilder, private service:LoginService) { }
  
  formLogins = this.formBuilder.group({
    username: [null, Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9@.-_-]{6,30}")])],
    password: ['', Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-\d$@$!%*?&,¬#=¡¿']{6,15}")])],
  });

  get validateLogin(){
    return this.formLogins.controls;
  }

  
  ngOnInit(): void {
    this.checkToken();
  }

  checkToken(){
    // if(localStorage.getItem("token")){
    //   this.router.navigate(['../applications']);
    // }
  }

  async login(){
    const datos = this.formLogins.value;
    console.log(datos);
    const token = await this.service.getToken(datos.username, datos.password);
    // let infoUser : any = [];

    // if(!token.access_token){
    //     this.snackBar.open('Credenciales incorrectas!', 'X', {
    //       duration: 3000,
    //       verticalPosition: 'top', // Allowed values are  'top' | 'bottom'
    //       horizontalPosition: 'right', // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right',
    //       panelClass: ['error-snackbar']
    //     });
    // }else{
    //   infoUser = await this.service.getInfo(token.access_token);
    //   localStorage.setItem("token",token.access_token);
    //   localStorage.setItem("uid",infoUser.sub);
    //   this.service.getType().pipe(first(),map(data => {
    //     return data;
    //   })).subscribe(data => {
    //     console.log();
    //      if(data[0].type==1){
    //         localStorage.removeItem("token");
    //         localStorage.removeItem("uid");
    //         this.snackBar.open('Acceso no permitido', 'X', {
    //           duration: 3000,
    //           verticalPosition: 'top', // Allowed values are  'top' | 'bottom'
    //           horizontalPosition: 'right', // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right',
    //           panelClass: ['error-snackbar']
    //         });
    //       }else if(data[0].type==2 || data[0].type==0){
    //         localStorage.setItem("type",data[0].type);
    //         this.snackBar.open('Inicio corecto, Hola '+ infoUser.preferred_username+' !', 'X', {
    //           duration: 3000,
    //           verticalPosition: 'top', // Allowed values are  'top' | 'bottom'
    //           horizontalPosition: 'right', // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right',
    //           panelClass: ['success-snackbar']
    //         });
    //         this.router.navigate(['../applications']);
    //       }
    //   },err =>{
    //     // TODO document why this arrow function is empty
      
    //   });
    // }
   
  }
}