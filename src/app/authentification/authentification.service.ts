import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {URLS} from "../../constant/ConstantUrl";
import {Observable} from "rxjs";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http:HttpClient) { }
  login(data:any): Observable<any>{
   return this.http.post(URLS.login,data,httpOptions);
  }
}
