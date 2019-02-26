import { Injectable } from '@angular/core';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    protected rest:RestService
  ) { }

  login(param){ return this.rest.get('LOGIN_PROFILES',param); }
  signup(param){ return this.rest.post('MAKE_INSTANT_SIGNUP',param); }
}
