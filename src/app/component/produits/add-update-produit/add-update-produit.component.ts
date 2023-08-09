import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {TierService} from "../../tier/tier.service";
import {ProduitModel} from "../ProduitModel";
import {ProduitsService} from "../produits.service";

@Component({
  selector: 'app-add-update-produit',
  templateUrl: './add-update-produit.component.html',
  styleUrls: ['./add-update-produit.component.scss']
})
export class AddUpdateProduitComponent implements OnInit {
  produitGroupe!:FormGroup;
  produitModel:ProduitModel={}
  cities = [
    {id: 1, name: 'Vilnius'},
    {id: 2, name: 'Kaunas'},
    {id: 3, name: 'Pavilnys', disabled: true},
    {id: 4, name: 'Pabradė'},
    {id: 5, name: 'Klaipėda'}
  ];
  constructor(private formBuilder:FormBuilder,private route:Router,private produitService:ProduitsService) { }
  get nom(){
    return this.produitGroupe.get('code')
  }

  get libell(){
    return this.produitGroupe.get('libell')
  }
  get quantite(){
    return this.produitGroupe.get('quantite')
  }
  get quantiteInitiale(){
    return this.produitGroupe.get('quantiteInitiale')
  }
  get prixVente(){
    return this.produitGroupe.get('prixVente')
  }
  get depot(){
    return this.produitGroupe.get('depot')
  }

  ngOnInit(): void {
    this.produitGroupe = this.formBuilder.group({
      code:[null,Validators.required],
      libell:[null,Validators.required],
      prixVente:[null,Validators.required],
      quantite:[null,Validators.required],
      quantiteInitiale:[null,Validators.required],
      depot:[null,Validators.required],

    })
  }
  saveProduit(){
    this.produitModel.code=this.nom?.value;
    this.produitModel.libell=this.libell?.value;
    this.produitModel.quantite=this.quantite?.value;
    this.produitModel.quantiteInitiale=this.quantiteInitiale?.value;
    this.produitModel.depot=this.depot?.value;
    this.produitModel.prixVente=this.prixVente?.value;
    this.produitService.saveProduit(this.produitModel).subscribe(res => {
      this.route.navigateByUrl("component/produit")
    })
  }

}
