import { Component, OnInit } from '@angular/core';
import {TierModel} from "../TierModel";
import {Router} from "@angular/router";
import {TierService} from "../tier.service";

@Component({
  selector: 'app-tier-list',
  templateUrl: './tier-list.component.html',
  styleUrls: ['./tier-list.component.scss']
})
export class TierListComponent implements OnInit {
tierList:TierModel[]=[]
  constructor(private route:Router,private tierService:TierService) { }

  ngOnInit(): void {
  this.listTier();
  }
  listTier(){
  this.tierService.getListTier().subscribe(res => {
    this.tierList = res;
  })
  }
  addTier(){
    this.route.navigateByUrl('/component/addClient')
  }

}
