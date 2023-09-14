import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {URLS} from "../../../constant/ConstantUrl";
import {ProduitModel} from "./ProduitModel";

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  constructor(private http:HttpClient) { }

  listProduit():Observable<any>{
    return this.http.get(URLS.produit);
  }
  saveProduit(produit:ProduitModel):Observable<any>{
    return this.http.post(URLS.produit,produit);
  }

  deleteProduit(factureId:number):Observable<any>{
    return this.http.delete(URLS.produit+'/'+factureId,{responseType:'text'});
  }
}
