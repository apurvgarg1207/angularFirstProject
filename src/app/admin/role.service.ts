import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private httpClient:HttpClient) { }

  addRole(role:any):Observable<any>{
    return this.httpClient.post("http://localhost:9090/roles",role)
  }

  getAllRoles():Observable<any>{
    return this.httpClient.get("http://localhost:9090/roles")
  }

  deleteRoleById(roleid:any):Observable<any>{
    return this.httpClient.delete("http://localhost:9090/roles/"+roleid)
  }

  getRoleById(roleId:any):Observable<any>{
    return this.httpClient.get("http://localhost:9090/roles/"+roleId)
  }

  updateRole(role:any):Observable<any>{
    return this.httpClient.put("http://localhost:9090/roles",role)
  }
}
