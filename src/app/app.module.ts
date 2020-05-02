import { AuthorService } from './../services/author.service';
import { AuthorComponent } from './author/author.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseCardComponent } from './course-card/course-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    CourseCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
