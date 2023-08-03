import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {URLS} from "../../../constant/ConstantUrl";

@Injectable({
  providedIn: 'root'
})
export class DepotService {

  constructor(private http:HttpClient) { }

  listDepot(): Observable<any>{
    return this.http.get(URLS.listDepot);
  }
}
