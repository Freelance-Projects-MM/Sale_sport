import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {URLS} from "../../../constant/ConstantUrl";
import {DepotModel} from "./DepotModel";

@Injectable({
  providedIn: 'root'
})
export class DepotService {

  constructor(private http:HttpClient) { }

  listDepot(): Observable<any>{
    return this.http.get(URLS.depot);
  }
  listUsers(): Observable<any>{
    return this.http.get(URLS.listUsers);
  }
  saveDepot(depot:DepotModel): Observable<any>{
    return this.http.post(URLS.depot,depot);
  }
}
