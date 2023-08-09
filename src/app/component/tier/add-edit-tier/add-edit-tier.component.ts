import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {TierModel} from "../TierModel";
import {TierService} from "../tier.service";

@Component({
  selector: 'app-add-edit-tier',
  templateUrl: './add-edit-tier.component.html',
  styleUrls: ['./add-edit-tier.component.scss']
})
export class AddEditTierComponent implements OnInit {
tierGroup!:FormGroup;
tierModel:TierModel={}
  constructor(private formBuilder:FormBuilder,private route:Router,private tierService:TierService) { }
  get nom(){
    return this.tierGroup.get('nom')
  }

  get prenom(){
    return this.tierGroup.get('prenom')
  }
  get numeroTel(){
    return this.tierGroup.get('numeroTel')
  }
  get email(){
    return this.tierGroup.get('email')
  }
  get adress(){
    return this.tierGroup.get('adress')
  }

  ngOnInit(): void {
    this.tierGroup = this.formBuilder.group({
      nom:[null,Validators.required],
      prenom:[null,Validators.required],
      numeroTel:[null,Validators.required],
      email:[null,Validators.required],
      adress:[null,Validators.required],

    })
  }
  saveTier(){
    this.tierModel.nom=this.nom?.value;
    this.tierModel.prenom=this.prenom?.value;
    this.tierModel.numeroTel=this.numeroTel?.value;
    this.tierModel.email=this.email?.value;
    this.tierModel.adress=this.adress?.value;
    this.tierService.saveTier(this.tierModel).subscribe(res => {
      this.route.navigateByUrl("component/client")
    })
  }

}
