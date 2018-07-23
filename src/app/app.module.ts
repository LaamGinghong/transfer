import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MobxAngularModule} from "mobx-angular";
import { SourceComponent } from './source/source.component';

@NgModule({
  declarations: [
    AppComponent,
    SourceComponent,
  ],
  imports: [
    BrowserModule,
    MobxAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
