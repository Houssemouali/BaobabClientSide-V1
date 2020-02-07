import { Injectable } from '@angular/core';
import { JournalistSignup } from '../models/journalist-signup';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtResponse } from '../Auth/jwt-response';
import { JournalistLogin } from '../models/journalist-login';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class JournalistService {
  private loginJouralist='http://localhost:8080/journalist/auth/signin';
  private signupUrl = 'http://localhost:8080/journalist/auth/signup';

  private baseURL='http://localhost:8080/journalist/auth/';

  private journalist:JournalistSignup
  constructor(private http: HttpClient) { }
  
  SignInJournalist(credentials:JournalistLogin):Observable<JwtResponse>{
    return this.http.post<JwtResponse>(this.baseURL+'signin',credentials,httpOptions);
  }
  signUp(info:JournalistSignup):Observable<string>{
    return this.http.post<string>(this.signupUrl,info,httpOptions)
  }

  GetMyArticle(id:number):Observable<any>{
    return this.http.get(this.baseURL+id);
  }

}
