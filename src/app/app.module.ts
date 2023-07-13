import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementsComponent } from './server-elements/server-elements.component';
import { BasicHighlightDirective } from './Basic-Highlight(Directives)/basic-highlight.directive';
import { BetterHighlightDirective } from './better-Directive(renderer)/better-highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerElementsComponent,
    BasicHighlightDirective,
    BetterHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
