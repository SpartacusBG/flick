import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { FlickrSharedService } from './services/flickr.shared.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { SpinnerModule } from 'angular2-spinner/dist';
import { MultiSelectModule } from 'primeng/multiselect';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DescriptionComponent } from './components/description/description.component';
import { InfiniteScrollerDirective } from './directives/infinite-scroll.directive';
import { AuthHttp } from './services/AuthHttp';

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    FileUploadModule,
    SpinnerModule,
    MultiSelectModule,
    InfiniteScrollModule
    
  ],
  declarations: [
    LoaderComponent,
    DescriptionComponent,
    InfiniteScrollerDirective
  ],
  exports: [
    LoaderComponent,
    DescriptionComponent,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FileUploadModule,
    SpinnerModule,
    MultiSelectModule,
    InfiniteScrollModule,
    InfiniteScrollerDirective
  ],
  providers: [
    FlickrSharedService,
    AuthHttp
  ]
})
export class SharedModule { }
