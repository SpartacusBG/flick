import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { FlickrSharedService } from './services/flickr.shared.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { SpinnerModule } from 'angular2-spinner/dist';

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    FileUploadModule,
    SpinnerModule
  ],
  declarations: [
    LoaderComponent
  ],
  exports: [
    LoaderComponent,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FileUploadModule,
    SpinnerModule
  ],
  providers: [
    FlickrSharedService
  ]
})
export class SharedModule { }
