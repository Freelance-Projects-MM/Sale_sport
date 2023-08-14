import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Route, Router} from "@angular/router";
import {DepotService} from "../depot.service";
import {DepotModel} from "../DepotModel";

@Component({
  selector: 'app-add-edit-depot',
  templateUrl: './add-edit-depot.component.html',
  styleUrls: ['./add-edit-depot.component.scss']
})
export class AddEditDepotComponent implements OnInit {
depotGroup!:FormGroup;
depotModel:DepotModel={};
  constructor(private formBuilder:FormBuilder,private depotService:DepotService,private route:Router) { }
get code(){
    return this.depotGroup.get('code');
}
get libelle(){
    return this.depotGroup.get('libelle');
}
get ville(){
    return this.depotGroup.get('ville');
}
  ngOnInit(): void {
    this.depotGroup = this.formBuilder.group({
      code : [null,Validators.required],
      libelle : [null,Validators.required],
      ville : [null,Validators.required]
    })
  }
  returnToListDepot(){
    this.route.navigateByUrl("/component/depot")
  }
  saveDepot(){
    this.depotModel.code = this.code?.value;
    this.depotModel.libelle = this.libelle?.value;
    this.depotModel.ville = this.ville?.value;
    this.depotService.saveDepot(this.depotModel).subscribe(res => {
      this.route.navigateByUrl("component/depot");
      console.log(res);
    })
  }

}
