import { Component, OnInit } from '@angular/core';
import {FactureModele} from "../FactureModele";
import {FactureService} from "../facture.service";
import {ProduitModel} from "../../produits/ProduitModel";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-facture',
  templateUrl: './list-facture.component.html',
  styleUrls: ['./list-facture.component.scss']
})
export class ListFactureComponent implements OnInit {
listFacture:FactureModele[]=[];
  listProduit:ProduitModel[]=[]
  constructor(private factureService:FactureService,private route:Router) { }

  ngOnInit(): void {
    this.getListFacture();
  }
  getListFacture(){
    this.factureService.listFacture().subscribe(res => {
      this.listFacture = res;
    })
  }
  addFacture(){
this.route.navigateByUrl("/component/addFacture")
  }
  supprimerFacture(factureId:number){
    this.factureService.deleteFacture(factureId).subscribe(res => {
      console.log('hello succ')
     this.getListFacture()
    },error => {

      console.log(error)
    })
  }


}
