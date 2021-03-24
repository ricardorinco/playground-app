import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RocketComponent } from './rocket/rocket.component';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent, RocketComponent],
    imports: [BrowserModule],
    providers: []
})
export class AppModule {}
