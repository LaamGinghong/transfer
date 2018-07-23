import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MobxAngularModule} from 'mobx-angular';
import {SourceComponent} from './source/source.component';
import {SourceInnerComponent} from './source/source-inner/source-inner.component';
import { TargetComponent } from './target/target.component';

@NgModule({
  declarations: [
    AppComponent,
    SourceComponent,
    SourceInnerComponent,
    TargetComponent
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
