import { Component, OnInit } from '@angular/core';
import {DepotService} from "../depot.service";
import {Depot} from "../Depot";

@Component({
  selector: 'app-list-depo',
  templateUrl: './list-depo.component.html',
  styleUrls: ['./list-depo.component.scss']
})
export class ListDepoComponent implements OnInit {
  listDepot : Depot[]=[];

  constructor(private depotService:DepotService) { }

  ngOnInit(): void {
    this.getListDepot()
  }
  getListDepot(){
    this.depotService.listDepot().subscribe(res => {
      console.log(res)
    })
  }

}
