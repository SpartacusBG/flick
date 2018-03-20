import { Component, OnInit, Input } from '@angular/core';
import { finalize } from 'rxjs/operators';

// Services
import { FlickrSharedService } from '../../services/flickr.shared.service';

// Models
import { FlickrImageModel } from '../../models/flickr.image.model';
import { FlickrImagePropertiesModel } from '../../models/fickr.image.prop.model';
import { FlickrPhotoPropertiesModel } from '../../models/flickr.photo.prop.model';

@Component({
  selector: 'description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  @Input() set imageObj(flickrImgObj: FlickrImageModel) {
    this.getPhotoInfo(flickrImgObj.id, flickrImgObj.secret)
  }

  description: string = '';
  photoTitle: string = '';
  imageUrl: string = '';
  author: string = '';
  tags: any[] = [];
  authorUsername: string = '';
  response: FlickrPhotoPropertiesModel;
  spinner: boolean = false;

  constructor(
    private flickrSharedService: FlickrSharedService
  ) {
  }

  ngOnInit() {

  }

  getPhotoInfo(photoId: string, secret: string) {
    this.spinner = true;
    this.flickrSharedService.getPhotoInfo({
      photo_id: photoId,
      secret: secret
    }).subscribe(
      (data) => this.onPhotoSuccess(data.json()),
      (err) => this.onError(err)
    );
  }

  assignValuesFromResponse(data: FlickrPhotoPropertiesModel) {
    this.description = data.photo.description._content;
    this.photoTitle = data.photo.title._content;
    this.imageUrl = data.photo.urls.url[0]._content;
    this.author = data.photo.owner.realname;
    this.authorUsername = data.photo.owner.nsid;
    this.tags = data.photo.tags.tag;
  }

  onPhotoSuccess(data: FlickrPhotoPropertiesModel) {
    this.response = data;
    this.assignValuesFromResponse(this.response);
    this.spinner = false;
  }

  onError(err: any) {
    this.spinner = false;
  }


}
