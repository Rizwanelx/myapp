import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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
  loading : boolean;
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
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
    // TODO: Use EventEmitter with form value
    this.service.login(this.loginForm.value).subscribe(
      response => {
        this.loading = true;
        localStorage.setItem('LoggedUser',JSON.stringify(response));
        localStorage.setItem('isLoggedIn',"true");
        this.router.navigate(['/home']);
      },
      error => {
        this.loading = false;
        console.log('error', error);
      }
    )
  }
}
