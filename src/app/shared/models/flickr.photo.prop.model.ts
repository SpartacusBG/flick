import { FlickrImagePropertiesModel } from './fickr.image.prop.model';

export class FlickrPhotoPropertiesModel {
    public stat?: string;
    public photo?: FlickrImagePropertiesModel;
   
    constructor(
        stat?: string,
        photo?: FlickrImagePropertiesModel,      
    ) {
        this.stat = stat ? stat : '';
        this.photo = photo ? photo : null;
    }
}
