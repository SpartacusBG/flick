import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { FlickrSharedService } from './services/flickr.shared.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SpinnerModule } from 'angular2-spinner/dist';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DescriptionComponent } from './components/description/description.component';
import { ReadMoreComponent } from './components/read-more/read-more.component';
import { InfiniteScrollerDirective } from './directives/infinite-scroll.directive';
import { FormsModule } from '@angular/forms';
import { GrowlModule } from 'primeng/growl';
import { ErrorMessageComponent } from './components/error/error-message.component';
import { ErrorMessageSharedService } from './services/error-message.shared.service';

@NgModule({
  imports: [
    CommonModule,
    Ng2SearchPipeModule,
    FormsModule,
    SpinnerModule,
    InfiniteScrollModule,
    GrowlModule
    
  ],
  declarations: [
    LoaderComponent,
    DescriptionComponent,
    InfiniteScrollerDirective,
    ReadMoreComponent,
    ErrorMessageComponent
  ],
  exports: [
    LoaderComponent,
    DescriptionComponent,
    Ng2SearchPipeModule,
    SpinnerModule,
    InfiniteScrollModule,
    InfiniteScrollerDirective,
    ReadMoreComponent,
    FormsModule,
    GrowlModule,
    ErrorMessageComponent
  ],
  providers: [
    FlickrSharedService,
    ErrorMessageSharedService
  ]
})
export class SharedModule { }
