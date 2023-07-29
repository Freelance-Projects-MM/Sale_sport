import {Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import {FileServicesService} from "../../../services/files/file-services.service";

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  @ViewChild("fileUpload", {static: false}) fileUpload!: ElementRef;
  files  = [];
  fileName!:string;


  constructor(private fileServicesService:FileServicesService) { }

  ngOnInit(): void {
  }
  onClick() {
    const fileUpload = this.fileUpload.nativeElement;
    fileUpload.onchange = () => {
      const file = fileUpload.files[0];
      this.fileName = file.name.replace(/\.[^/.]+$/, "") +" is uploaded"

      this.fileUpload.nativeElement.value = '';
      const formData = new FormData();
      formData.append('file', file.data);
      file.inProgress = true;
      this.getBase64(file).then(
        data => {
          console.log(data)
          this.fileServicesService.addFile(data).subscribe(res => {
            console.log(res)
          });
        }
      );

    };
    fileUpload.click();
  }


getBase64(file:any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        let encoded = reader.result?.toString().replace(/^data:(.*,)?/, '');
        if (encoded !== undefined && (encoded.length % 4) > 0) {
          encoded += '='.repeat(4 - (encoded.length % 4));
        }
        resolve(encoded);
      };
      reader.onerror = error => reject(error);
    });
  }

}
