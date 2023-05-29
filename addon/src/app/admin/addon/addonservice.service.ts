import { Injectable } from '@angular/core';
import { addon } from './addon';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddonserviceService {

  


  private baseUrl = "http://localhost:8080/addons";



  constructor(private httpclient : HttpClient) { }

    getList(): Observable<addon[]>{
      return this.httpclient.get<addon[]>(`${this.baseUrl}`);
    }

    addAddon(add : addon): Observable<object>{
      return this.httpclient.post(`${this.baseUrl}`,add);
    }

    getAddonId(addOnid : number): Observable<addon>
{
  return this.httpclient.get<addon>(`${this.baseUrl}/${addOnid}`);
}    

  updateaddonss(addOnid : number, ad : addon): Observable<Object>{
    return this.httpclient.put(`${this.baseUrl}/${addOnid}`, ad);
  }

  deleteaddon(addOnid : number): Observable<Object>{
    return this.httpclient.delete(`${this.baseUrl}/${addOnid}`);
  }
}
