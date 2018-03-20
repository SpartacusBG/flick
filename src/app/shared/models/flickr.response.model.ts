import { FlickrPhotosModel } from './flickr.photos.model';

export class FlickrResponseModel {
    public stat?: string;
    public photos?: FlickrPhotosModel;
   
    constructor(
        stat?: string,
        photos?: FlickrPhotosModel,
      
    ) {
        this.stat = stat ? stat : '';
        this.photos = photos ? photos : null;
        
    }
}
