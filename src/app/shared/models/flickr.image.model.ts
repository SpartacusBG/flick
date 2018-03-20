export class FlickrImageModel {
    public farm?: number;
    public id?: string;
    public isfamily?: number;
    public isfriend?: any;
    public ispublic?: string;
    public owner?: string;
    public secret?: string;
    public server?: string;
    public title?: string;
   
    constructor(
        farm?: number,
        id?: string,
        isfamily?: number,
        isfriend?: any,
        ispublic?: string,
        owner?: string,
        secret?: string,
        server?: string,
        title?: string
      
    ) {
        this.farm = farm ? farm : null;
        this.id = id ? id : null;
        this.isfamily = isfamily ? isfamily : null;
        this.isfriend = isfriend ? isfriend : null;
        this.ispublic = ispublic ? ispublic : null;
        this.owner = owner ? owner : '';
        this.secret = secret ? secret : '';
        this.server = server ? server : '';
        this.title = title ? title : '';      
    }
}
