import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card-link',
    templateUrl: './card-link.component.html',
    styleUrls: ['./card-link.component.css']
})
export class CardLinkComponent {
    @Input()
    public icon: string;

    @Input()
    public title: string;

    @Input()
    public link: string;
}
