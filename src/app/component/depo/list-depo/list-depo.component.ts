import { Component, OnInit } from '@angular/core';
import {DepotService} from "../depot.service";
import {Depot} from "../Depot";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-depo',
  templateUrl: './list-depo.component.html',
  styleUrls: ['./list-depo.component.scss']
})
export class ListDepoComponent implements OnInit {
  listDepot : Depot[]=[];

  constructor(private depotService:DepotService,private route:Router) { }

  ngOnInit(): void {
   // this.getlistUsers();
    this.getListDepot()
  }
  getListDepot(){
    this.depotService.listDepot().subscribe(res => {
      console.log(res)
      this.listDepot = res;
    })
  }
  getlistUsers(){
    this.depotService.listUsers().subscribe(res => {
      console.log(res)
    })
  }
  addDepot(){
    this.route.navigateByUrl('/component/AddDepot')
  }

}
