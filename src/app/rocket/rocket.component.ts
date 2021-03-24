import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-rocket',
    templateUrl: './rocket.component.html',
    styleUrls: ['./rocket.component.css']
})
export class RocketComponent {
    @Input()
    public title: string;
}
