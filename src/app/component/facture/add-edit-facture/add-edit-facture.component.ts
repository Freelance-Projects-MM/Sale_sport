import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {TierService} from "../../tier/tier.service";
import {TierModel} from "../../tier/TierModel";
import {ProduitModel} from "../../produits/ProduitModel";
import {ProduitsService} from "../../produits/produits.service";
import {NgSelectComponent} from "@ng-select/ng-select";
import {DeatailFactureModele} from "../DeatailFactureModele";
import {FactureModele} from "../FactureModele";
import {FactureService} from "../facture.service";

@Component({
  selector: 'app-add-edit-facture',
  templateUrl: './add-edit-facture.component.html',
  styleUrls: ['./add-edit-facture.component.scss']
})
export class AddEditFactureComponent implements OnInit {
factureGroup!:FormGroup;
  listProduit:ProduitModel[]=[]
  tierList:TierModel[]=[];
  showAlert=false
  sommePrixTotals=0;
  factureModele:FactureModele={};
  alertMessag={
    message:'',
    classAlert:'alert alert-'
  }
  listStatusPaiement=[{code:'NON_PAIE',value:'Non paie'},{code:'PAIE',value:'Paie'}];
  listStatusFacture=[{code:'VALID',value:'Valide'},{code:'BROUILLON',value:'Brouillon'}];
  //@ViewChild('selectFrom') inputFocus:NgSelectComponent;
  @ViewChild('selectFrom') ngSelectStatusFact!:NgSelectComponent;

  constructor(private factureService:FactureService,private formBuilder:FormBuilder,private route:Router,private tierService:TierService,private produitService:ProduitsService) { }
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
      prixTotale:[0,Validators.required],
      detailFactures:this.formBuilder.array([])


    })
    this.prixTotale?.disable();
    this.onFormChangesFacture();
    this.getListProduit();
    this.listTier()
    this.addProduitToDetaillFacture()
  }

  returnToListFacture(){
this.route.navigateByUrl("/component/listFacture")
  }
  saveFacture(){
    console.log(this.factureGroup.value)
    this.factureModele.client = this.client?.value;
    this.factureModele.statusFacture = this.statusFacture?.value.code;
    this.factureModele.statusPaiementFacture = this.statusPaiementFacture?.value.code;
    this.factureModele.prixTotale = this.prixTotale?.value;
    this.factureModele.detailFactures = this.detailFactures?.value;
    this.factureService.saveFacture(this.factureModele).subscribe(res => {
      console.log(res);
      this.route.navigateByUrl("/component/listFacture");
    })

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
  onFormChangesFacture(){
    this.detailFactures.valueChanges.subscribe(val => {
      this.sommePrixTotals = 0;
      this.prixTotale?.enable();
      val.forEach((det:DeatailFactureModele) => {
        if((det.quantite !== undefined && det?.produits?.quantite !== undefined )&&(det?.quantite>det?.produits?.quantite)){
          this.alertMessag.classAlert='alert alert-danger';
          this.alertMessag.message='la quantite du produit '+det.produits.libell + ' doit étre inférieur à '+det.produits.quantite
          this.showAlert = true
          setTimeout(()=>{
            this.showAlert = false
          },5000)
        }
        if(det.prix !==undefined && det.quantite !== undefined ){
          const prixToTalProduits = (det.prix * det.quantite);
          this.sommePrixTotals +=prixToTalProduits;

          this.prixTotale?.setValue(this.sommePrixTotals);
        }


      })
    })

  }
  calculerPrixTotal(){

  }


}
