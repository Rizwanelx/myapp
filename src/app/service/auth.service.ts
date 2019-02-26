import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(protected router:Router) { }

  logout(){
    localStorage.removeItem('LoggedUser');
    localStorage.setItem('isLoggedIn',"false");
    this.router.navigate(['/login']);
  }
}
