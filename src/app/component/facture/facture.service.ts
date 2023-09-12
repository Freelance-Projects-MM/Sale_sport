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

  updateFacture(factureModele:FactureModele):Observable<any>{
    return this.http.put(URLS.facture,factureModele);
  }
  listFacture():Observable<any>{
    return this.http.get(URLS.facture);
  }
  listFactureByWord(word:string):Observable<any>{
    return this.http.get(URLS.facture+'/'+word);
  }
  deleteFacture(factureId:number):Observable<any>{
    return this.http.delete(URLS.facture+'/'+factureId,{responseType:'text'});
  }
  pdfFacture(factureId:number):Observable<Blob>{
    return this.http.get(URLS.facture+'/generateFacture/'+factureId, {
      responseType: 'blob'});
  }
}
