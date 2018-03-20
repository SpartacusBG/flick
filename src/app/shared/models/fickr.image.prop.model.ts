export class FlickrImagePropertiesModel {
    public comments?: any;
    public dates?: any;
    public dateuploaded?: string;
    public description?: any;
    public editability?: any;
    public farm?: number;
    public id?: string;
    public isfavorite?: number;
    public license?: string;
    public media?: string;
    public notes?: any;
    public originalformat?: string;
    public originalsecret?: string;
    public owner?: any;
    public people?: any;
    public publiceditability?: any;
    public rotation?: number;
    public safety_level?: string;
    public secret?: string;
    public server?: string;
    public tags?: any;
    public title?: any;
    public urls?: any;
    public usage?: any;
    public visibility?: any;
   
    constructor(
        comments?: any,
        dates?: any,
        dateuploaded?: string,
        description?: any,
        editability?: any,
        farm?: number,
        id?: string,
        isfavorite?: number,
        license?: string,
        media?: string,
        notes?: any,
        originalformat?: string,
        originalsecret?: string,
        owner?: any,
        people?: any,
        publiceditability?: any,
        rotation?: number,
        safety_level?: string,
        secret?: string,
        server?: string,
        tags?: any,
        title?: any,
        urls?: any,
        usage?: any,
        visibility?: any
      
    ) {
        this.comments = comments ? comments : null
        this.dates = dates ? dates : null;
        this.dateuploaded = dateuploaded ? dateuploaded : '';
        this.description = description ? description : null;
        this.editability = editability ? editability : null;
        this.farm = farm ? farm : null;
        this.id = id ? id : null;
        this.isfavorite = isfavorite ? isfavorite : null;
        this.license = license ? license : '';
        this.media = media ? media : '';
        this.notes = notes ? notes : null;
        this.originalformat = originalformat ? originalformat : '';
        this.originalsecret = originalsecret ? originalsecret : '';
        this.owner = owner ? owner : null;
        this.people = people ? people : null;
        this.publiceditability = publiceditability ? publiceditability : null;
        this.rotation = rotation ? rotation : null;
        this.safety_level = safety_level ? safety_level : null;
        this.secret = secret ? secret : null;
        this.server = server ? server : null;
        this.tags = tags ? tags : null;
        this.title = title ? title : null;
        this.urls = urls ? urls : null;
        this.usage = usage ? usage : null;
        this.visibility = visibility ? visibility : null;
    }
}
