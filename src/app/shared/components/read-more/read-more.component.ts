import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'read-more',
    templateUrl: 'read-more.component.html',
    styleUrls: ['read-more.component.scss']
})

export class ReadMoreComponent implements OnInit {
    @Input() inputData: any;
    isCollapsed: boolean = true;
    hideShowHideButtons: boolean = false;
    charCount = 60;

    ngOnInit() {
        if (this.inputData.toString().length <= this.charCount) {
            this.hideShowHideButtons = true;
            this.isCollapsed = false;
        }
    }
}