import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class FlickrSharedService {

    apiKey: string = '7c2a8024b7d7d7124769fb3448f4e8cf';
    defaultTag: string = 'nature';
    resourceUrl: string = 'https://api.flickr.com/services/rest/?method=flickr.photos.search';

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
        return this.http.get(this.resourceUrl, options)
        .map((res: Response) => res);
    }

}
