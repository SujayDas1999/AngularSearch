import { Component, EventEmitter, Output } from '@angular/core';
import { FileUploadEvent, UploadEvent } from 'primeng/fileupload';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent {
  @Output() fileData = new EventEmitter<string[]>();
  /**
   *
   */
  readFile: FileReader;
  constructor() {
    this.readFile = new FileReader();
  }

  onUpload(event: any) {
    var file: File = event.files[0];
    this.readFile.readAsText(file);
    this.readFile.onload = () => {
      var arr = [];
      const res = this.readFile.result as String;
      arr = res.split(',');
      this.fileData.emit(arr);
    };
  }
}
