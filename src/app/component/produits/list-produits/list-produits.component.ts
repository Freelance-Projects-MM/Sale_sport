import { Component, OnInit } from '@angular/core';
import {ProduitModel} from "../ProduitModel";
import {ProduitsService} from "../produits.service";
import {Router} from "@angular/router";
import {DepotModel} from "../../depo/DepotModel";
import {DepotService} from "../../depo/depot.service";

@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.scss']
})
export class ListProduitsComponent implements OnInit {
  listProduit:ProduitModel[]=[]
  listDepot : DepotModel[]=[];
  constructor(private produitService:ProduitsService,private depotService:DepotService,private route:Router) { }

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
  deleteProduit(id:number){
    this.produitService.deleteProduit(id).subscribe(res => {
      this.getListProduit()
    }, error => {

      console.log(error)
    })
  }


}
