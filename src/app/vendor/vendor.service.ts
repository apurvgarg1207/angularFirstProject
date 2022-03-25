import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private httpClient:HttpClient) { }

  getAllStocks():Observable<any>{
    return this.httpClient.get("http://localhost:9090/stocks")
  }

}
