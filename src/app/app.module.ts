import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  declarations: [AppComponent, SearchComponent, UploadComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DialogModule,
    FileUploadModule,
    ToastModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
