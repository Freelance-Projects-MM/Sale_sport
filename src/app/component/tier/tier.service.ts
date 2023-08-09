import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TierModel} from "./TierModel";
import {URLS} from "../../../constant/ConstantUrl";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TierService {

  constructor(private http:HttpClient) { }

  saveTier(tier:TierModel):Observable<any>{
    return this.http.post(URLS.tier,tier);
  }
  getListTier():Observable<any>{
    return this.http.get(URLS.tier);
  }
}
