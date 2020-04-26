import { AuthorService } from './../services/author.service';
import { AuthorComponent } from './author/author.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
