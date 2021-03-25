import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardRocketComponent } from './cards/card-rocket/card-rocket.component';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        CardRocketComponent
    ],
    imports: [BrowserModule],
    providers: []
})
export class AppModule {}
