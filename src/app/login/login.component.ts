import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { GlobalService } from '../service/global.service';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    Email: new FormControl('' , [Validators.required, Validators.email]),
    Password: new FormControl('',  [Validators.required, Validators.minLength(5)]),
  });

  constructor(
    protected service :LoginService,
    protected global: GlobalService,
    protected router:Router,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.logout();
  }
  onSubmit() {
    if (this.loginForm.valid){
    this.service.login(this.loginForm.value).subscribe(
      response => {
        localStorage.setItem('LoggedUser',JSON.stringify(response));
        localStorage.setItem('isLoggedIn',"true");
        this.router.navigate(['/home']);
      },
      error => {
        console.log('error', error);
      }
    )
  }else{
    alert('Form is invalied!');
  }
}
}
