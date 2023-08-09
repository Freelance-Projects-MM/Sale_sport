import { Component, OnInit } from '@angular/core';
import {ProduitModel} from "../ProduitModel";
import {ProduitsService} from "../produits.service";
import {Router} from "@angular/router";
import {DepotModel} from "../../depo/DepotModel";

@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.scss']
})
export class ListProduitsComponent implements OnInit {
  listProduit:ProduitModel[]=[]

  constructor(private produitService:ProduitsService,private route:Router) { }

  ngOnInit(): void {
    this.getListProduit();
  }
  getListProduit(){
    this.produitService.listProduit().subscribe( res => {
      this.listProduit =res ;
    })
  }
  addProduit(){
    this.route.navigateByUrl('/component/addProduits');
  }
  getDepotCode(depot:DepotModel){
    return depot.code? depot.code:'';
  }


}
