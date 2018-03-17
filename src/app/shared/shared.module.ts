import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { FlickrSharedService } from './services/flickr.shared.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
  ],
  declarations: [
    LoaderComponent
  ],
  exports: [
    LoaderComponent,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  providers: [
    FlickrSharedService
  ]
})
export class SharedModule { }
