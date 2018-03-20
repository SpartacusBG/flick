import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class FlickrSharedService {

    apiKey: string = '542874581808fbf5e126a0dc29b21933';
    defaultTag: string = 'nature';
    resourceUrl: string = 'https://cors-anywhere.herokuapp.com/https://api.flickr.com/services/rest/?method=flickr.photos.search';

  constructor(
      private http: Http
    ) { }

    setParams(req: any) {
        const params: URLSearchParams = new URLSearchParams();
        if (req) {
            params.set('page', req.page);
            params.set('per_page', req.size);
            params.set('api_key', this.apiKey);
            params.set('tags', req.tags);
            params.set('format', 'json');
            params.set('nojsoncallback', '1');
            
            if (req.query) {
                params.set('text', req.query);
            }
        }
        return params;
    }

    setPhotoParams(req: any) {
        const params: URLSearchParams = new URLSearchParams();
        if (req) {
            params.set('photo_id', req.photo_id);
            params.set('secret', req.secret);
            params.set('api_key', this.apiKey);
            params.set('format', 'json');
            params.set('nojsoncallback', '1');
            
            if (req.query) {
                params.set('text', req.query);
            }
        }
        return params;
    }

    search(req?: any): any {
        const options = {
            search: this.setParams(req)
        };
        return this.http.get(this.resourceUrl, options);
    }

    query(req?: any) {
        const options = {
            search: this.setParams(req)
        };
        return this.http.get(this.resourceUrl, options);
    }

    getPhotoInfo(req: any) {

        const options = {
            search: this.setPhotoParams(req)
        };
        return this.http.get('https://cors-anywhere.herokuapp.com/https://api.flickr.com/services/rest/?method=flickr.photos.getInfo', options);
    }

}
