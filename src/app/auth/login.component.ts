import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService} from './login.service';
// import { JwtHelperService } from '@auth0/angular-jwt';
// import { first, map} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  hide = true;
  constructor(private router: Router, private snackBar: MatSnackBar, private formBuilder:FormBuilder, private service:LoginService) { }
  
  formLogins = this.formBuilder.group({
    username: [null, Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9@.-_-]{6,30}")])],
    password: ['', Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-\d$@$!%*?&,¬#=¡¿']{6,15}")])],
  });

  get validateLogin(){
    return this.formLogins.controls;
  }

  
  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  }

  async login(){
    const datos = this.formLogins.value;
    const token = await this.service.getToken(datos.username, datos.password);
    let infoUser : any = [];

    if(!token.access_token){
      Swal.fire({
        title: 'Credenciales incorrectas!',
        icon: 'error',
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
        showCloseButton: true,
      });
    }else{
      infoUser = await this.service.getInfo(token.access_token);
      localStorage.setItem("token",token.access_token);
      localStorage.setItem("uid",infoUser.sub);
      localStorage.setItem("token_expires",`${new Date().getTime()+(token.expires_in*1000)}`)
      localStorage.setItem("name",infoUser.name);
      const data = await this.service.getType();
      if(data){
        if(data[0].type==1){
          localStorage.clear();
          Swal.fire({
            title: 'Acceso no permitido',
            icon: 'error',
            timer: 3000,
            timerProgressBar: true,
            showConfirmButton: false,
            showCloseButton: true,
          });
        } else if(data[0].type==2 || data[0].type==0){
          localStorage.setItem("type",data[0].type);
          Swal.fire({
            title: 'Inicio correcto!',
            icon: 'success',
            timer: 3000,
            timerProgressBar: true,
            showConfirmButton: false,
            showCloseButton: true,
          });
          this.router.navigate(['../pages']);
        }
      }else{
        Swal.fire({
          title: 'Ha ocurrido un error!',
          icon: 'error',
          timer: 3000,
          timerProgressBar: true,
          showConfirmButton: false,
          showCloseButton: true,
        });
      }
    }
  }
}