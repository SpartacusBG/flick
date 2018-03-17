import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { FlickrSharedService } from '../shared/services/flickr.shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quote: string;
  isLoading: boolean;
  p: number = 0;
  imageContentArray: any[] = [];
  totalItems: number;
  currentSearch: string;
  itemsPerPage: number;

  constructor(
    private flickrSharedService: FlickrSharedService
  ) {
    this.itemsPerPage = 3;
   }

  ngOnInit() {
    this.isLoading = true;
    this.loadAll(1);

  }

  search(query: any) {
    if (!query) {
      return this.clear();
    }
    this.currentSearch = query;
    this.loadAll();
  }

  clear() {
    this.currentSearch = '';
    this.loadAll();
  }


  loadAll(event?: any) {

    if (this.currentSearch) {
      this.flickrSharedService.search({
        query: this.currentSearch,
        page: event,
        tags: 'cats'
      }).subscribe(
        (res: Response) => this.onSuccess(res.json()),
        (res: Response) => this.onError(res.json())
        );
      return;
  }
    this.flickrSharedService.query({
        page: event,
        size: this.itemsPerPage,
        tags: 'cats'
      }
    
  ).subscribe(
      (res: any) => this.onSuccess(res.json()),
      (res: any) => this.onError(res.json())
    );
  }

  private onSuccess(response: any) {
    this.totalItems = response.photos.pages * response.photos.perpage;
    this.imageContentArray = response.photos.photo;
  }

  private onError(error: any) {
    alert(error.error);
  }

  getServerData(event: any) {
    this.loadAll(event);
  }


  constructImageUrl(farm: any, serverId: any, photoId: any, secretId: any) {
    return 'http://farm' + farm +'.staticflickr.com/' + serverId + '/' + photoId + '_' + secretId + '.jpg';
  }

}
