import { Component, OnInit } from '@angular/core';
import {FileServicesService} from "../../../services/files/file-services.service";

@Component({
  selector: 'app-list-files',
  templateUrl: './list-files.component.html',
  styleUrls: ['./list-files.component.scss']
})
export class ListFilesComponent implements OnInit {
  fileResult:string="";

  constructor(private filesService:FileServicesService) { }

  ngOnInit(): void {
    this.filesService.listFiles().subscribe(res => {
      console.log(res);
      this.fileResult = JSON.stringify(res,null, 4);
    })
  }

}
