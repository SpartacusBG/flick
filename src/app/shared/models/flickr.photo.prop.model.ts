import { FlickrImagePropertiesModel } from './fickr.image.prop.model';

export class FlickrPhotoPropertiesModel {
    public stat?: string;
    public photo?: FlickrImagePropertiesModel;
    public message?: string;
   
    constructor(
        stat?: string,
        photo?: FlickrImagePropertiesModel,
        message?: string,      
    ) {
        this.stat = stat ? stat : '';
        this.photo = photo ? photo : null;
    }
}
