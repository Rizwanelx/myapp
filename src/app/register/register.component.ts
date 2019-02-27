import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validator, Validators } from '@angular/forms';
import { GlobalService } from '../service/global.service';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loading: boolean;
  regForm = new FormGroup({
    DealerId: new FormControl(''),
    Name: new FormControl(''),
    Email: new FormControl(''),
    Phone: new FormControl(''),
    Country: new FormControl(''),
    Reserve1: new FormControl(''),
    Reserve2: new FormControl(''),
    Reserve3: new FormControl(''),
    Verified: new FormControl(''),
  });
  constructor(protected global:GlobalService, protected service :LoginService,protected router:Router
    ) { }
  ngOnInit() {
    this.loading = false;
  }
  onRegister() {
    this.loading = true;
    this.service.signup(this.regForm.value).subscribe(
      response => {
        this.loading = false;
        this.service.signup = response[''];
       // this.router.navigate(['/login']);
      },
      error => {
        this.loading = false;
        console.log('error', error);
      }
    )
  }
}
