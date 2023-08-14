import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FactureModele} from "./FactureModele";
import {Observable} from "rxjs";
import {URLS} from "../../../constant/ConstantUrl";

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  constructor(private http:HttpClient) { }
  saveFacture(factureModele:FactureModele):Observable<any>{
    return this.http.post(URLS.facture,factureModele);
  }
  listFacture():Observable<any>{
    return this.http.get(URLS.facture);
  }
}
