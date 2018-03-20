import { FlickrImageModel } from './flickr.image.model';

export class FlickrPhotosModel {
    public page?: number;
    public pages?: number;
    public perpage?: number;
    public photo?: Array<FlickrImageModel>;
    public total?: string;
   
    constructor(
        page?: number,
        pages?: number,
        perpage?: number,
        photo?: Array<FlickrImageModel>,
        total?: string,
      
    ) {
        this.page = page ? page : null;
        this.pages = pages ? pages : null;
        this.perpage = perpage ? perpage : null;
        this.photo = photo ? photo : [];
        this.total = total ? total : '';
    }
}
