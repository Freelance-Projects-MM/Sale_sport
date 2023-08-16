import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {TierService} from "../../tier/tier.service";
import {TierModel} from "../../tier/TierModel";
import {ProduitModel} from "../../produits/ProduitModel";
import {ProduitsService} from "../../produits/produits.service";
import {NgSelectComponent} from "@ng-select/ng-select";

@Component({
  selector: 'app-add-edit-facture',
  templateUrl: './add-edit-facture.component.html',
  styleUrls: ['./add-edit-facture.component.scss']
})
export class AddEditFactureComponent implements OnInit {
factureGroup!:FormGroup;
  listProduit:ProduitModel[]=[]
  tierList:TierModel[]=[];
  listStatusFacture=['VALID','BROUILLON'];
  listStatusPaiement=[{code:'NON_PAIE',value:'Non paie'},{code:'PAIE',value:'Paie'}];
  //@ViewChild('selectFrom') inputFocus:NgSelectComponent;
  @ViewChild('selectFrom') ngSelectStatusFact!:NgSelectComponent;

  constructor(private formBuilder:FormBuilder,private route:Router,private tierService:TierService,private produitService:ProduitsService) { }
  get client(){
    return this.factureGroup.get('client');
  }
  get dateFacture(){
    return this.factureGroup.get('dateFacture');
  }
  get statusFacture(){
    return this.factureGroup.get('statusFacture');
  }
  get statusPaiementFacture(){
    return this.factureGroup.get('statusPaiementFacture');
  }
  get prixTotale(){
    return this.factureGroup.get('prixTotale');
  }
  get detailFactures(){
    return this.factureGroup.get('detailFactures') as FormArray;
  }
  getListProduit(){
    this.produitService.listProduit().subscribe( res => {
      this.listProduit =res ;
    })
  }
  ngOnInit(): void {
    this.factureGroup = this.formBuilder.group({
      client:[null,Validators.required],
      dateFacture:[null,Validators.required],
      statusFacture:[null,Validators.required],
      statusPaiementFacture:[null,Validators.required],
      prixTotale:[null,Validators.required],
      detailFactures:this.formBuilder.array([])


    })
    this.getListProduit();
    this.listTier()
    this.addProduitToDetaillFacture()
  }

  returnToListFacture(){
this.route.navigateByUrl("/component/listFacture")
  }
  saveFacture(){
console.log(this.factureGroup.value)
  }
  listTier(){
    this.tierService.getListTier().subscribe(res => {
      this.tierList = res;
    })
  }
  detailFactureData(){
    const details = this.formBuilder.group({
      produits:[null,Validators.required],
      quantite:[null,Validators.required],
    prix:[null]
    })
    return details;
  }
  addProduitToDetaillFacture() {

    this.detailFactures.push(this.detailFactureData());
  }

  deleteProduitFromDetailFacture(i:any) {
    this.detailFactures.removeAt(i)
  }

}
