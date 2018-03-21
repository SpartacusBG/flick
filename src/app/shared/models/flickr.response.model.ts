import { FlickrPhotosModel } from './flickr.photos.model';

export class FlickrResponseModel {
    public stat?: string;
    public photos?: FlickrPhotosModel;
    public message?: any;
   
    constructor(
        stat?: string,
        photos?: FlickrPhotosModel,
        message?: any
      
    ) {
        this.stat = stat ? stat : '';
        this.photos = photos ? photos : null;
        
    }
}
