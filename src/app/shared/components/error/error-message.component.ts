import { Component, OnInit, Input } from '@angular/core';
import { finalize } from 'rxjs/operators';

// Services
import { ErrorMessageSharedService } from '../../services/error-message.shared.service';
import { Message } from 'primeng/components/common/api';


@Component({
  selector: 'error-message',
  templateUrl: './error-message.component.html'
})
export class ErrorMessageComponent implements OnInit {
    errorMsgs: Message[] = [];

  constructor(
      private errorMessageSharedService: ErrorMessageSharedService
  ) {
  }

  ngOnInit() {
    this.errorMessageSharedService.errorMessage.subscribe((errorMessage) => {
      if (errorMessage) {
        this.errorMsgs = [];
        this.errorMsgs.push({severity:'error', summary: errorMessage});
      }
    });
  }



}
