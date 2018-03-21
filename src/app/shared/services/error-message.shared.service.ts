import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ErrorMessageSharedService {

    private errorSource = new BehaviorSubject<any>(null);
    errorMessage = this.errorSource.asObservable();

    setErrorMessage(errorMessage: any) {
        this.errorSource.next(errorMessage);
    }
}