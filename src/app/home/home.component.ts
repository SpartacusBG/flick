import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
// Services
import { FlickrSharedService } from '../shared/services/flickr.shared.service';
import { ErrorMessageSharedService } from '../shared/services/error-message.shared.service';

// Models
import { FlickrResponseModel } from '../shared/models/flickr.response.model';
import { FlickrPhotosModel } from '../shared/models/flickr.photos.model';
import { FlickrImageModel } from '../shared/models/flickr.image.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imageContentArray: FlickrImageModel[] = [];
  totalItems: number;
  currentSearch: string;
  itemsPerPage: number;
  spinner: boolean = false;
  tags: string = 'dogs';
  currentPage: number = 1;
  scrollCallback: any;
  response: FlickrResponseModel;


  constructor(
    private flickrSharedService: FlickrSharedService,
    private errorMessageSharedService: ErrorMessageSharedService
  ) {
    this.itemsPerPage = 6;
    this.scrollCallback = this.loadAll.bind(this);
  }

  ngOnInit() {
    this.loadAll(this.currentPage);
  }

  onEnterPress(event: any, value: string) {
    if (event && event.keyCode == 13 && value) {
      this.cllSearch()
    }
  }

  cllSearch() {
    this.spinner = true;
    this.currentPage = 1;
    this.search();
  }

  search() {
    this.flickrSharedService.search({
      query: this.currentSearch,
      tags: this.tags,
      size: this.itemsPerPage
    }).subscribe(
      (res: Response) => this.onSearchSuccess(res.json()),
      (res: Response) => this.onError(res.json())
    );
  }

  loadAll(event?: any) {
    this.spinner = true;
    return this.flickrSharedService.query({
      page: this.currentPage,
      size: this.itemsPerPage,
      tags: this.tags,
      query: this.currentSearch
    }).do(
      (res: any) => this.onSuccessGetData(res.json())
    ).catch(this.onError);
  }

  private onSuccessGetData(response: any) {
    this.response = response;
    this.handleFailStatus(this.response.stat);
    this.imageContentArray = this.imageContentArray.concat(this.response.photos.photo);
    this.spinner = false;
    this.currentPage++;
  }

  private onSearchSuccess(response: any) {
    this.response = response;
    this.handleFailStatus(this.response.stat);
    this.imageContentArray = this.response.photos.photo;
    this.spinner = false;
    this.currentPage++;
  }

  private onError(err: any) {
    console.log('sever error:', err);  // debug
    this.spinner = false;
    this.errorMessageSharedService.setErrorMessage(err);
    return Observable.throw(err || 'backend server error');
  }

  handleFailStatus(status: string) {
    if (status == 'fail') {
      this.errorMessageSharedService.setErrorMessage(this.response.message);
      this.spinner = false;
      return false;
    }
  }

  constructImageUrl(farm: any, serverId: any, photoId: any, secretId: any) {
    return 'http://farm' + farm + '.staticflickr.com/' + serverId + '/' + photoId + '_' + secretId + '.jpg';
  }

}
