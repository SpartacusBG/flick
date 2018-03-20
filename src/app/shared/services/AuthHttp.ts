import {Injectable} from '@angular/core';
import {Http, Request, Response, RequestOptionsArgs, RequestOptions, XHRBackend} from '@angular/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthHttp extends Http {
  constructor(backend: XHRBackend, defaultOptions: RequestOptions) {
    super(backend, defaultOptions);

    // Setup default http headers here
    defaultOptions.headers.append('Cache-control', 'no-cache');
    defaultOptions.headers.append('Cache-control', 'no-store');
    defaultOptions.headers.append('Pragma', 'no-cache');
    defaultOptions.headers.append('Expires', '0');
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    // Before request execution. You can manipulate headers per request here.

    return super.request(url, options)
      .map(res => { // Successful Response
        return res;
      })
      .catch((err: any) => { // Unsuccessful Response.
        return Observable.throw(err);
      });
  }
}