import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FileServicesService {
serverPath:string = 'https://fakestoreapi.com/products/\'';
  constructor(private http:HttpClient) { }

  listFiles():Observable<any>{
    return this.http.get(this.serverPath+"1");
  }
  addFile(data:any):Observable<any>{
    return this.http.post(this.serverPath,data);
  }
}
