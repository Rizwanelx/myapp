import { Injectable } from '@angular/core';
import { HttpClient } from  "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RestService {

  baseUrl:string="http://162.253.17.115:4152/exchange_witoex/";
  baseUrl1:string="http://162.253.17.115:4152/exchange_witoex/";

  constructor(protected http:HttpClient) { }

  get(endpoint,params:any){
    let args:any[]= [];
    for(let key in params){
      args.push(key+"="+params[key]);
    }
    return this.http.get<any>(this.baseUrl+"/"+endpoint+"?"+args.join("%"));
  }

  post(endpoint,params:any){
    return this.http.post<any>(this.baseUrl+"/"+endpoint,params);
  }

  Get(endpoint,params:any){
    let args:any[]= [];
    for(let key in params){
      args.push(key+"="+params[key]);
    }
    return this.http.get<any>(this.baseUrl1+"/"+endpoint+"?"+args.join("&"));
  }

  Post(endpoint,params:any){
    return this.http.post<any>(this.baseUrl1+"/"+endpoint,params);
  }
  
}
