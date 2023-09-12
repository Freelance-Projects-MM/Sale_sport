import {Component, OnInit} from '@angular/core';
import {FactureModele} from "../FactureModele";
import {FactureService} from "../facture.service";
import {ProduitModel} from "../../produits/ProduitModel";
import {Router} from "@angular/router";
import * as FileSaver from 'file-saver';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-list-facture',
  templateUrl: './list-facture.component.html',
  styleUrls: ['./list-facture.component.scss']
})
export class ListFactureComponent implements OnInit {
  listFacture: FactureModele[] = [];
  listProduit: ProduitModel[] = []


  constructor(private factureService: FactureService, private route: Router, private fb: FormBuilder) {
  }



  ngOnInit(): void {

    this.getListFacture();
  }

  getListFacture() {
    this.factureService.listFacture().subscribe(res => {
      this.listFacture = res;
    })
  }

  getListFactureByWord(event:any) {
    console.log(event.target.value)
    setTimeout (() => {
      this.factureService.listFactureByWord(event.target.value).subscribe(res => {
      this.listFacture = res;
    })
    }, 1000);

  }

  addFacture() {
//this.route.navigateByUrl("/component/addFacture")
    this.route.navigate(['/component/addFacture'])
  }

  getPdfFacture(id: number, namePdf: string) {
    this.factureService.pdfFacture(id).subscribe(res => {
      const blob = new Blob([res], {type: 'application/pdf'});
      FileSaver.saveAs(blob, namePdf);

    })
  }

  deleteFacture(factureId: number) {
    this.factureService.deleteFacture(factureId).subscribe(res => {
      this.getListFacture()
    }, error => {

      console.log(error)
    })
  }

  updateFacture(facture: FactureModele) {
    this.route.navigate(['/component/addFacture'], {state: facture})
  }


}
