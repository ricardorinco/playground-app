import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardLinkComponent } from './cards/card-link/card-link.component';
import { CardRocketComponent } from './cards/card-rocket/card-rocket.component';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        CardLinkComponent,
        CardRocketComponent
    ],
    imports: [BrowserModule],
    providers: []
})
export class AppModule {}
