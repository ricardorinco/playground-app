import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-rocket',
    templateUrl: './card-rocket.component.html',
    styleUrls: ['./card-rocket.component.css']
})
export class CardRocketComponent {
    @Input()
    public title: string;
}
