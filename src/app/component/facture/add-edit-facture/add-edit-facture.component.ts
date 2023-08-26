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
  factureModeleToUpdate:FactureModele={};

  alertMessag={
    message:'',
    classAlert:'alert alert-'
  }
  listStatusPaiement=[{code:'NON_PAIE',value:'Non paie'},{code:'PAIE',value:'Paie'}];
  listStatusFacture=[{code:'VALID',value:'Valide'},{code:'BROUILLON',value:'Brouillon'}];
  //@ViewChild('selectFrom') inputFocus:NgSelectComponent;
  @ViewChild('selectFrom') ngSelectStatusFact!:NgSelectComponent;

  constructor(private factureService:FactureService,private formBuilder:FormBuilder,private route:Router,private tierService:TierService,private produitService:ProduitsService) {

    console.log(this.route?.getCurrentNavigation()?.extras.state);
    if(this.route?.getCurrentNavigation()?.extras !== null){
      this.factureModeleToUpdate = this.route?.getCurrentNavigation()?.extras.state as FactureModele;

    }


  }
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
      this.listProduit.forEach(p => {
        if(p.quantite===0){
          p.disabled=true;
        }
      })
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
    this.updateFacture();
  }
  updateFacture(){
    if(this.factureModeleToUpdate !== null && this.factureModeleToUpdate !== undefined){
      this.detailFactures.clear();
      this.prixTotale?.setValue(this.factureModeleToUpdate.prixTotale);
     this.client?.setValue(this.factureModeleToUpdate.client);

     if(this.factureModeleToUpdate.detailFactures !== undefined){
       this.factureModeleToUpdate.detailFactures.forEach( (detail:DeatailFactureModele) => {
         const details = this.formBuilder.group({
           id:[detail.id],
           produits:[detail.produits,Validators.required],
           quantite:[detail.quantite,Validators.required],
           prix:[detail.prix,Validators.required],
           libelleProduit:[detail.libelleProduit],
           dateFacture:[detail.libelleProduit],
           numero:[detail.libelleProduit]
         })
         this.detailFactures?.push(details);
       })
     }
     this.statusFacture?.setValue(this.listStatusFacture.filter(d => d.code === this.factureModeleToUpdate.statusFacture)[0])
      this.statusPaiementFacture?.setValue(this.listStatusPaiement.filter(d => d.code === this.factureModeleToUpdate.statusPaiementFacture)[0])
    }
    //this.factureGroup.reset();

  }

  returnToListFacture(){
this.route.navigateByUrl("/component/listFacture")
  }
  saveFacture(){
    if(this.factureModeleToUpdate !== undefined ){
      const facture = this.factureGroup.value as FactureModele;
      facture.id=this.factureModeleToUpdate.id;
      facture.statusPaiementFacture = this.factureGroup.get('statusPaiementFacture')?.value.code;
      facture.statusFacture = this.factureGroup.get('statusFacture')?.value.code;
      facture.dateFacture = this.factureModeleToUpdate.dateFacture;
      facture.numero = this.factureModeleToUpdate.numero;
      this.factureService.updateFacture(facture).subscribe(res => {
        console.log(res);
        this.route.navigateByUrl("/component/listFacture");
      })
    }else{
      const facture = this.factureGroup.value as FactureModele;
      console.log(this.factureGroup.value)
      this.factureModele.client = facture.client;
      this.factureModele.statusPaiementFacture = this.factureGroup.get('statusPaiementFacture')?.value.code;
      this.factureModele.statusFacture = this.factureGroup.get('statusFacture')?.value.code;
      this.factureModele.prixTotale = facture.prixTotale;
      this.factureModele.detailFactures = facture.detailFactures;
      this.factureService.saveFacture(this.factureModele).subscribe(res => {
        console.log(res);
        this.route.navigateByUrl("/component/listFacture");
      })
    }


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
