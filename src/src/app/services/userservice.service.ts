import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  
  constructor(private httpclient :HttpClient) { }

  storeUser(newUser: User):Observable<any>{
    return this.httpclient.post('http://localhost:8080/userinfo', newUser);
  }

  
}
