import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private httpClient:HttpClient) { }

  saveUser(user:any):Observable<any>{
    return this.httpClient.post("http://localhost:9090/users",user)
  }
  authenticate(user:any):Observable<any>{
    
    return this.httpClient.post("http://localhost:9090/usersLogin",user)
  }
  saveVendor(user:any):Observable<any>{
    return this.httpClient.post("http://localhost:9090/users",user)
  }
}
